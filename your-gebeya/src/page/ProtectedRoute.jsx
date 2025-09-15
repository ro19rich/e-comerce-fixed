import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/auth" replace />;

  try {
    const { exp } = jwtDecode(token);
    if (Date.now() >= exp * 1000) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return <Navigate to="/auth" replace />;
    }
  } catch (error) {
    console.log(error);
    return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
