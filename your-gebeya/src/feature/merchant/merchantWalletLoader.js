import { getMerchantOrder } from "../../services/Api";

async function merchantWalletLoader() {
  const orders = await getMerchantOrder();
  return orders;
}
export default merchantWalletLoader;
