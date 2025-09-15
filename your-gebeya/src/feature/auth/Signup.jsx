import { useEffect } from "react";
import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

export default function Signup() {
  const navigation = useNavigation();
  const actionData = useActionData();
  const navigate = useNavigate();

  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (actionData?.success) {
      const t = setTimeout(() => {
        navigate("/auth"); // go to login page
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [actionData, navigate]);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <Form method="post" className="space-y-3">
        <div className="flex gap-4">
          <label>
            <input type="radio" name="role" value="user" defaultChecked /> User
          </label>
          <label>
            <input type="radio" name="role" value="merchant" /> Merchant
          </label>
        </div>
        <input
          className="w-full border p-2 rounded"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="w-full border p-2 rounded"
          name="email"
          type="email"
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

        <input
          className="w-full border p-2 rounded"
          name="phone"
          placeholder="Phone"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {isSubmitting ? "Creating Account..." : "Sign Up"}
        </button>
      </Form>
      {actionData?.success && (
        <p className="text-green-600">{actionData.message}</p>
      )}
    </div>
  );
}
