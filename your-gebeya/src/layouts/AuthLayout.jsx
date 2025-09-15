// layouts/AuthLayout.jsx
import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <Outlet />
        <div className="text-center mt-4 text-sm">
          <Link to="/auth">Login</Link> | <Link to="/auth/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
