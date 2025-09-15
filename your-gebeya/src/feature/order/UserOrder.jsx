import { useLoaderData } from "react-router-dom";

export default function UserOrders() {
  const orders = useLoaderData() || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold p-6">My Orders</h2>

      <div className="space-y-6 p-3">
        {orders.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl flex flex-row"
          >
            {/* Image */}
            <div className="w-1/4  flex items-center justify-between">
              <img
                src={item.image[0].url}
                alt={item.productName}
                className="w-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {item.productName}
                </h3>
                <p className="text-gray-800 font-medium mb-1">
                  ETB {item.price}
                </p>
                <p className="text-gray-600 mb-1">Quantity: {item.quantity}</p>
                <p className="text-gray-600 mb-2">{item.address}</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    item.delivered
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.delivered ? "Delivered" : "Pending"}
                </span>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Order Code: {item.DeliveredCode}
              </p>
              <p>Order ID: {item.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
