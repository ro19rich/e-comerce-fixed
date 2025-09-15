import { useDispatch } from "react-redux";
import { addToCart } from "../../feature/cart/cartSlice";

function Buttton({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => {
          dispatch(addToCart(product));
        }}
        className=" capitalize border-none focus:outline-none bg-green-300 hover:bg-green-400 text-white px-8 py-1.5 rounded-full cursor-pointer transition"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Buttton;
