import { useDispatch } from "react-redux";
import {
  Form,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { addProduct, updateProduct } from "./productSlice";
import Loading from "../../component/ui/Loading";

export default function MerchantProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const merchantData = useLoaderData();
  const products = merchantData.products || [];
  const handleEdit = (p) => {
    dispatch(updateProduct(p)); // save product in redux
    navigate("/dashboard/product/form"); // go to form page
  };
  const handleAdd = () => {
    dispatch(addProduct()); // save product in redux
    navigate("/dashboard/product/form"); // go to form page
  };
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isSubmitting = navigation.state === "submitting";
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex gap-6">
      <div className="flex-1 bg-white p-4 rounded shadow overflow-x-auto">
        <div className="flex items-center pb-3 justify-between">
          <h2 className="text-xl font-bold mb-4">Your Products</h2>
          <button
            onClick={() => {
              handleAdd();
            }}
            className=" bg-green-500 hover:bg-green-600 text-white py-1.5 px-6 rounded"
          >
            Add product
          </button>
        </div>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-3 py-2">ID</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Price</th>
              <th className="border px-3 py-2">Stock</th>
              <th className="border px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.ID}>
                <td className="border px-3 py-2">{p.ID}</td>
                <td className="border px-3 py-2">{p.name}</td>
                <td className="border px-3 py-2">{p.price}</td>
                <td className="border px-3 py-2">{p.stock}</td>
                <td className="border px-3 py-2 space-x-2">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        handleEdit(p);
                      }}
                      className="px-2 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <Form
                      method="DELETE"
                      className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                    >
                      <input hidden name="id" defaultValue={p.ID} />
                      <button>{isSubmitting ? "Loading.." : "Delete"}</button>
                    </Form>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
