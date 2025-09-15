import { useSelector } from "react-redux";
import { Form, Link, useNavigation } from "react-router-dom";

function CheckoutPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const items = useSelector((state) => state.cart.items);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-500 hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Order summary */}
        <div className="bg-stone-50 border rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.ID} className="flex justify-between items-center">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>ETB {item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-xl font-bold flex justify-between">
            <span>Total:</span>
            <span>ETB {totalPrice}</span>
          </div>
        </div>

        {/* Shipping form */}
        <Form
          method="POST"
          className="bg-stone-50 border rounded-lg shadow-sm p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold mb-4">Shipping Info</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              name="name"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              name="address"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300"
              required
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            {isSubmitting ? "Ordering..." : "Place Order"}
          </button>
        </Form>
      </div>
    </div>
  );
}
export default CheckoutPage;
