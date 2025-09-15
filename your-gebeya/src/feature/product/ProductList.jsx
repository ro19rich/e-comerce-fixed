import { useNavigate, useNavigation } from "react-router-dom";
import ProductCard from "../../component/ui/ProductCard";
import Loading from "../../component/ui/Loading";
import { useEffect } from "react";

function ProductList({ products }) {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        if (user?.Role === "merchant") {
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("Invalid user JSON", err);
      }
    }
  }, [navigate]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductCard product={product} key={product.ID} />
      ))}
    </div>
  );
}

export default ProductList;
