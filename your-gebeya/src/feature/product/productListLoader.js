import { getAllproduct } from "../../services/Api";

async function productListLoader() {
  const response = await getAllproduct();
  return response;
}
export default productListLoader;
