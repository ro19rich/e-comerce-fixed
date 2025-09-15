import { getMerchantOrder, getMerchantProduct } from "../../services/Api";

async function merchantDashboardLoader() {
  const productsRes = await getMerchantProduct();
  const orders = await getMerchantOrder();

  const products = productsRes ? productsRes : [];

  return { products, orders };
}
export default merchantDashboardLoader;
