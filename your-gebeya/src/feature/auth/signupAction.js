import { signup } from "../../services/Api";

async function signupAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await signup(data);
  return { success: true, message: "Sign up successful!" };
}
export default signupAction;
