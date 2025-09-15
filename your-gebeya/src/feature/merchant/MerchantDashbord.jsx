import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../component/ui/Loading";
export default function MerchantDashboard() {
  const loaderData = useLoaderData();
  const products = loaderData?.products || [];
  const orders = loaderData.orders || [];
  const merchantProduct = products.products || [];
  const recentOrder = [...orders].reverse().slice(0, 5);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">Merchant Dashboard</h2>
      {/* Stats */}
      <div className="grid grid-cols-4  gap-4 mb-8">
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Total Products</div>
          <div className="text-2xl font-bold">{merchantProduct.length}</div>
        </div>
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Total Orders</div>
          <div className="text-2xl font-bold">{orders.length}</div>
        </div>
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Pending Orders</div>
          <div className="text-2xl font-bold">
            {orders.filter((o) => !o.delivered).length}
          </div>
        </div>
        <div className="bg-stone-50 shadow rounded p-4 text-center">
          <div className="text-gray-700">Delivered Orders</div>
          <div className="text-2xl font-bold">
            {orders.filter((o) => o.delivered).length}
          </div>
        </div>
      </div>
      {/* Orders Table */}
      <div className="bg-stone-100 shadow-md rounded p-4">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-stone-200">
              <th className="border border-stone-500 p-2">Order ID</th>
              <th className="border border-stone-500 p-2">Product</th>
              <th className="border border-stone-500 p-2">Quantity</th>
              <th className="border border-stone-500 p-2">Price</th>
              <th className="border border-stone-500 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {recentOrder.map((order) => (
              <tr key={order.id}>
                <td className="border border-stone-500 p-2">{order.id}</td>
                <td className="border border-stone-500 p-2">{order.name}</td>
                <td className="border border-stone-500 p-2">
                  {order.quantity}
                </td>
                <td className="border border-stone-500 p-2">
                  ETB {order.price}
                </td>
                <td className="border border-stone-500 p-2">
                  {order.delivered ? "Delivered" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Products Table */}
      <div className="bg-stone-100 shadow rounded p-4 mt-8">
        <h3 className="text-xl font-semibold mb-4">Products</h3>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-stone-200">
              <th className="border border-stone-500 p-2">ID</th>
              <th className="border border-stone-500 p-2">Name</th>
              <th className="border border-stone-500 p-2">Price</th>
              <th className="border border-stone-500 p-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {merchantProduct.map((p) => (
              <tr key={p.ID}>
                <td className="border border-stone-500 p-2">{p.ID}</td>
                <td className="border border-stone-500 p-2">{p.name}</td>
                <td className="border border-stone-500 p-2">ETB {p.price}</td>
                <td className="border border-stone-500 p-2">{p.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
