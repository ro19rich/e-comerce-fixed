import { login } from "../../services/Api";

async function loginAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await login(data);
  return response;
}
export default loginAction;
