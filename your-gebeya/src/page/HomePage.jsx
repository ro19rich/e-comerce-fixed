import { useLoaderData } from "react-router-dom";
import ProductList from "../feature/product/ProductList";

function HomePage() {
  const products = useLoaderData();
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default HomePage;
