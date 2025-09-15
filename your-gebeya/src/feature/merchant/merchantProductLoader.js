import { getMerchantProduct } from "../../services/Api";

async function merchantProductLoader() {
  const product = await getMerchantProduct();
  return product;
}
export default merchantProductLoader;
