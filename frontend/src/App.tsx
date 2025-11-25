import { useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthMode = "login" | "register";

export default function App() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const endpoint = mode === "login" ? "/login" : "/register";

    try {
      const response = await fetch(`http://localhost:4000${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Erro ao processar requisição");
        setLoading(false);
        return;
      }

      if (mode === "register") {
        setError("");
        alert("Cadastro realizado com sucesso! Faça login.");
        setMode("login");
        setPassword("");
      } else {
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        navigate("/carteira");
      }
    } catch (err) {
      setError("Erro ao conectar com o servidor");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">
        {mode === "login" ? "Login" : "Cadastro"}
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Processando..." : mode === "login" ? "Entrar" : "Cadastrar"}
        </button>
      </form>

      <p className="mt-4 text-center text-sm">
        {mode === "login" ? "Não tem conta? " : "Já tem conta? "}
        <button
          onClick={() => {
            setMode(mode === "login" ? "register" : "login");
            setError("");
          }}
          className="text-blue-600 hover:underline"
        >
          {mode === "login" ? "Cadastre-se" : "Faça login"}
        </button>
      </p>
    </div>
  );
}
