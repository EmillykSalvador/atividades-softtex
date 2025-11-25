const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

const JWT_SECRET = "minha_chave_super_secreta";

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token não fornecido." });

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json({ error: "Token inválido." });
  }
}

app.post("/register", async (req, res) => {
  const { email, password, name, role } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email e senha são obrigatórios." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null,
        role: role || "CLIENTE",
      },
    });

    res.json({ message: "Usuário criado com sucesso!", id: user.id });
  } catch (e) {
    console.error(e);
    res.status(400).json({ error: "Email já cadastrado." });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(401).json({ error: "Usuário não encontrado." });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Senha inválida." });

  const token = jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({ token, email: user.email, role: user.role });
});

app.get("/me", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      balance: true,
      createdAt: true,
    },
  });

  if (!user) return res.status(404).json({ error: "Usuário não encontrado." });

  res.json(user);
});

app.get("/wallet/balance", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.userId },
    select: { balance: true },
  });

  if (!user) return res.status(404).json({ error: "Usuário não encontrado." });

  res.json({ balance: user.balance });
});

app.get("/wallet/transactions", authMiddleware, async (req, res) => {
  const page = parseInt(req.query.page || "1", 10);
  const limit = parseInt(req.query.limit || "10", 10);
  const skip = (page - 1) * limit;

  const [transactions, total] = await Promise.all([
    prisma.transaction.findMany({
      where: { userId: req.user.userId },
      orderBy: { createdAt: "desc" },
      skip,
      take: limit,
    }),
    prisma.transaction.count({
      where: { userId: req.user.userId },
    }),
  ]);

  res.json({
    transactions,
    page,
    limit,
    total,
  });
});

app.post("/wallet/recharge", authMiddleware, async (req, res) => {
  const { amount } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ error: "Valor inválido." });
  }

  const value = Number(amount);

  const user = await prisma.user.update({
    where: { id: req.user.userId },
    data: {
      balance: { increment: value },
      transactions: {
        create: {
          amount: value,
          type: "recharge",
          description: "Recarga de carteira",
        },
      },
    },
  });

  res.json({ balance: user.balance });
});

app.listen(port, () => {
  console.log(`✅ Servidor rodando em http://localhost:${port}`);
});
