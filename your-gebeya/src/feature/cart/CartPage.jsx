import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "./cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (items.length === 0)
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

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.ID}
            className="flex items-center justify-between p-4 bg-stone-50 border border-stone-300 rounded-lg shadow-md"
          >
            {/* Item Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.images[0].url}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-stone-600">ETB {item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.ID))}
                className="px-2 py-1 bg-stone-300 rounded hover:bg-stone-400"
              >
                -
              </button>
              <span className="px-3">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item.ID))}
                className="px-2 py-1 bg-stone-300 rounded hover:bg-stone-400"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeFromCart(item.ID))}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total & Clear */}
      <div className="flex justify-between items-center mt-6 p-4 bg-stone-100 rounded-lg">
        <span className="text-xl font-bold">Total: ETB {totalPrice}</span>
        <div className="flex gap-2">
          <button
            onClick={() => dispatch(clearCart())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>
          <Link to="/checkout">
            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default CartPage;
