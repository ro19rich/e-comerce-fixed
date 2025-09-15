import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../component/ui/Loading";

export default function MerchantWallet() {
  const orders = useLoaderData() || [];

  const possible = orders.reduce((sum, order) => sum + order.price, 0);

  const total = orders.reduce(
    (sum, order) => (order.merchantStatus ? sum + order.price : sum),
    0
  );
  const pending = orders.reduce(
    (sum, order) =>
      order.orderstatus && !order.merchantStatus ? sum + order.price : sum,
    0
  );
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Wallet</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-100 rounded text-center">
          <div className="text-sm text-gray-600">Balance</div>
          <div className="text-2xl font-bold text-green-800">
            ETB {total.toFixed(2)}
          </div>
        </div>
        <div className="p-4 bg-yellow-100 rounded text-center">
          <div className="text-sm text-gray-600">Pending Payout</div>
          <div className="text-2xl font-bold text-yellow-800">
            ETB {pending.toFixed(2)}
          </div>
        </div>
        <div className="p-4 bg-blue-100 rounded text-center">
          <div className="text-sm text-gray-600">possible balance</div>
          <div className="text-2xl font-bold text-blue-800">
            ETB {possible.toFixed(2)}
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-2">Transactions</h3>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Customer</th>
              <th className="border px-3 py-2">Amount</th>
              <th className="border px-3 py-2">Payout</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border px-3 py-2">{order.id}</td>
                <td className="border px-3 py-2">
                  {order.orderStatus ? "Paid" : "Pending"}
                </td>
                <td className="border px-3 py-2">ETB {order.price}</td>
                <td className="border px-3 py-2">
                  {order.merchantStatus ? "Complete" : "Pending"}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
