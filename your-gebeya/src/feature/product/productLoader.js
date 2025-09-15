import { getProduct } from "../../services/Api";

export default async function productLoader({ params }) {
  const { id } = params;
  const response = await getProduct(id);
  return response;
}
