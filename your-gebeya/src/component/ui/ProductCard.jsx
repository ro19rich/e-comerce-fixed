import { Link } from "react-router-dom";
import Buttton from "./Buttton";

function ProductCard({ product }) {
  const { ID, name, price, stock, images } = product;
  const image1 = images[0]?.url;
  return (
    <div className="flex flex-col shadow-md bg-stone-50 border p-3 border-stone-200 rounded-sm ">
      <Link to={`/product/${ID}`}>
        <div className="h-50">
          <img className="w-full p-1.5" src={image1} />
        </div>
      </Link>
      <div className="text-xs text-center text-stone-600 ">{name}</div>
      <div className="flex items-center justify-between p-2">
        <div className="font-bold">
          <span className="uppercase text-xs">etb </span>
          {price}
        </div>
        <div className="capitalize font-bold ">
          <span className="text-xs ">stock </span>
          {stock}
        </div>
      </div>
      <Buttton product={product} />
    </div>
  );
}

export default ProductCard;
