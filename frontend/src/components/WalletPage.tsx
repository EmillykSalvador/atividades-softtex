import { useEffect, useState } from "react";

type Transaction = {
  id: number;
  amount: string;
  type: string;
  description: string | null;
  createdAt: string;
};

export function WalletPage() {
  const [balance, setBalance] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token"); // garante que você salvou no login

  async function loadBalance() {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:4000/wallet/balance", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao buscar saldo");
      setBalance(Number(data.balance));
    } catch (e: any) {
      setError(e.message);
    }
  }

  async function loadTransactions() {
    if (!token) return;
    try {
      const res = await fetch(
        "http://localhost:4000/wallet/transactions?limit=20&page=1",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao buscar extrato");
      setTransactions(data.transactions || []);
    } catch (e: any) {
      setError(e.message);
    }
  }

  useEffect(() => {
    loadBalance();
    loadTransactions();
  }, []);

  async function handleRecharge(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/wallet/recharge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: Number(amount) }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao recarregar");
      setBalance(Number(data.balance));
      setAmount("");
      await loadTransactions();
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Minha carteira</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="mb-6">
        <span className="text-gray-600">Saldo atual:</span>
        <div className="text-3xl font-bold">
          {balance !== null ? `R$ ${balance.toFixed(2)}` : "..."}
        </div>
      </div>

      <form
        onSubmit={handleRecharge}
        className="flex gap-2 items-center mb-8"
      >
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Valor da recarga"
          className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading || !amount}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
        >
          {loading ? "Processando..." : "Recarregar"}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Extrato</h2>
      <div className="border rounded">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-3 py-2">Data</th>
              <th className="text-left px-3 py-2">Tipo</th>
              <th className="text-right px-3 py-2">Valor</th>
              <th className="text-left px-3 py-2">Descrição</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-t">
                <td className="px-3 py-2">
                  {new Date(t.createdAt).toLocaleString()}
                </td>
                <td className="px-3 py-2">
                  {t.type === "recharge" ? "Recarga" : "Pagamento"}
                </td>
                <td className="px-3 py-2 text-right">
                  R$ {Number(t.amount).toFixed(2)}
                </td>
                <td className="px-3 py-2">
                  {t.description || "-"}
                </td>
              </tr>
            ))}
            {transactions.length === 0 && (
              <tr>
                <td
                  colSpan={4}
                  className="px-3 py-4 text-center text-gray-500"
                >
                  Nenhuma transação ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
