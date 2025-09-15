import { redirect } from "react-router-dom";
import { store } from "../../app/store";
import { createOrder } from "../../services/Api";

async function orderAction({ request }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const state = store.getState();
  const items = state.cart.items;

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const newOrderItems = items.map((item) => ({
    productId: item.ID,
    merchantProfileId: item.merchant_profile_id,
    quantity: item.quantity,
    price: item.price,
    ...data,
  }));
  const newOrder = {
    userId: user.ID,
    totalPrice,
    orderItems: newOrderItems,
  };
  console.log(newOrder);
  const paymentUrl = await createOrder(newOrder);
  return redirect(paymentUrl);
}
export default orderAction;
