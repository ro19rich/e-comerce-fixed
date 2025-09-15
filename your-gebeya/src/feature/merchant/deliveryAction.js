import { redirect } from "react-router-dom";
import { provideDeliveryCode } from "../../services/Api";

async function deliveryAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("deliveryCode:", data);
  const newData = {
    itemId: Number(data.itemId),
    deliveredCode: data.deliveredCode,
  };
  await provideDeliveryCode(newData);
  return redirect("/dashboard/orders");
}
export default deliveryAction;
