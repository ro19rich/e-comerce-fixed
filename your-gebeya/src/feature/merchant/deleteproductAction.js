import { redirect } from "react-router-dom";
import { deleteProductApi } from "../../services/Api";

async function deleteProductAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await deleteProductApi(data.id);
  return redirect("/dashboard/products");
}
export default deleteProductAction;
