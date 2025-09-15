import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

export default function Login() {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData();
  const dispatch = useDispatch();
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (actionData?.status === "success") {
      localStorage.setItem("token", actionData.token);
      localStorage.setItem("user", JSON.stringify(actionData.data));

      if (actionData.data.Role === "merchant") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  }, [actionData, dispatch, navigate]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <Form method="post" className="space-y-3">
        <input
          className="w-full border p-2 rounded"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </Form>
      {actionData?.status === "success" && (
        <p className="text-green-600">login successful!</p>
      )}
    </div>
  );
}
