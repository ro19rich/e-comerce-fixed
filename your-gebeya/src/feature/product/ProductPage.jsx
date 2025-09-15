import { useLoaderData, useNavigation } from "react-router-dom";
import Buttton from "../../component/ui/Buttton";
import Loading from "../../component/ui/Loading";

function ProductPage() {
  const product = useLoaderData();
  const { stock, ID, images, price, name, description } = product;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex shadow-md bg-stone-50 border border-stone-200 m-4">
      <div className="flex-1 shadow-sm">
        <img className="w-full h-[22rem] p-4" src={images[0]?.url} />
      </div>
      <div className="flex-1 flex flex-col p-6 gap-4">
        <div className="font-semibold text-center text-2xl text-stone-800">
          {name}
        </div>

        <div className="font-normal text-stone-600">{description}</div>
        <div className="flex items-center justify-between px-6 capitalize font-bold text-3xl">
          <span>price</span>
          <span>{price}</span>
        </div>
        <div className="flex items-center justify-between px-6 capitalize  text-sm font-semibold">
          <span>stock</span>
          <span>{stock}</span>
        </div>
        <Buttton product={product} />
      </div>
    </div>
  );
}

export default ProductPage;
