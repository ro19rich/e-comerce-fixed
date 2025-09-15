import { getMerchantOrder } from "../../services/Api";
async function merchantOrderLoader() {
  const orders = await getMerchantOrder();
  return orders;
}
export default merchantOrderLoader;
