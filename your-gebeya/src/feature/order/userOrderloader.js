import { getUserOrder } from "../../services/Api";

async function userOrderLoader() {
  const ordersRes = await getUserOrder();
  const orders = ordersRes ? ordersRes : [];
  console.log(orders);
  return orders;
}
export default userOrderLoader;
