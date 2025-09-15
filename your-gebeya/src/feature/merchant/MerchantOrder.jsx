import { Form, useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../component/ui/Loading";

export default function MerchantOrder() {
  const orderData = useLoaderData() || [];

  const orders = [...orderData].reverse();
  console.log(orders);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const isLoading = navigation.state === "loading";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="bg-white p-4 rounded shadow overflow-x-auto">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">ID</th>
            <th className="border px-3 py-2">Product</th>
            <th className="border px-3 py-2">Quantity</th>
            <th className="border px-3 py-2">Price</th>
            <th className="border px-3 py-2">Buyer</th>
            <th className="border px-3 py-2">Status</th>
            <th className="border px-3 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="border px-3 py-2">{order.id}</td>
              <td className="border px-3 py-2">{order.productName}</td>
              <td className="border px-3 py-2">{order.quantity}</td>
              <td className="border px-3 py-2">{order.price}</td>
              <td className="border px-3 py-2">{order.name}</td>
              <td className="border px-3 py-2">{order.orderStatus}</td>
              <td className="border px-3 py-2">
                {order.orderStatus === "paid" ? (
                  !order.delivered ? (
                    <Form method="POST">
                      <div className="flex gap-1.5">
                        <input
                          name="deliveredCode"
                          required
                          className="w-25 text-xs px-2 border focus:outline-none focus:ring focus:ring-blue-300 rounded-xs"
                        />
                        <input
                          type="hidden"
                          name="itemId"
                          defaultValue={order.id}
                        />

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                        >
                          {isSubmitting ? "Marking" : "Mark"}
                        </button>
                      </div>
                    </Form>
                  ) : (
                    <span className="text-green-600 font-semibold">
                      Delivered
                    </span>
                  )
                ) : (
                  <div>Not Paid</div>
                )}
              </td>
            </tr>
          ))}
          {orders.length === 0 && (
            <tr>
              <td colSpan="8" className="text-center py-4">
                No orders found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
