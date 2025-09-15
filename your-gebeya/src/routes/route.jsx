import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";

import ProductPage from "../feature/product/ProductPage";
import CartPage from "../feature/cart/CartPage";
import NotFoundPage from "../page/NotFoundPage";
import productListLoader from "../feature/product/productListLoader";
import productLoader from "../feature/product/productLoader";
import CheckoutPage from "../feature/checkout/CheckoutPage";
import MerchantLayout from "../layouts/MercantLayout";

import MerchantProduct from "../feature/merchant/MerchantProduct";
import MerchantOrder from "../feature/merchant/MerchantOrder";
import MerchantDashboard from "../feature/merchant/MerchantDashbord";
import MerchantWallet from "../feature/merchant/MerchantWallet";
import orderAction from "../feature/checkout/orderAction";
import ErrorPage from "../component/ui/ErrorPage";
import merchantDashboardLoader from "../feature/merchant/merchantDashbordLoader";
import merchantProductLoader from "../feature/merchant/merchantProductLoader";

import productFormAction from "../feature/merchant/productFormAction";

import ProductForm from "../feature/merchant/ProductForm";
import merchantOrderLoader from "../feature/merchant/merchantOrderLoader";
import deliveryAction from "../feature/merchant/deliveryAction";
import merchantWalletLoader from "../feature/merchant/merchantWalletLoader";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../feature/auth/Login";
import SignUp from "../feature/auth/Signup";
import signupAction from "../feature/auth/signupAction";
import loginAction from "../feature/auth/loginAction";
import deleteProductAction from "../feature/merchant/deleteproductAction";
import UserOrders from "../feature/order/UserOrder";
import userOrderLoader from "../feature/order/userOrderloader";
import ProtectedRoute from "../page/ProtectedRoute";
import HomePage from "../page/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage />, loader: productListLoader },
          {
            path: "product/:id",
            element: <ProductPage />,
            loader: productLoader,
          },
          { path: "cart", element: <CartPage /> },
          { path: "checkout", element: <CheckoutPage />, action: orderAction },
          { path: "orders", element: <UserOrders />, loader: userOrderLoader },
        ],
      },
      {
        path: "/dashboard",
        element: <MerchantLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <MerchantDashboard />,
            loader: merchantDashboardLoader,
          },
          {
            path: "products",
            element: <MerchantProduct />,
            loader: merchantProductLoader,
            action: deleteProductAction,
          },
          {
            path: "orders",
            element: <MerchantOrder />,
            loader: merchantOrderLoader,
            action: deliveryAction,
          },
          {
            path: "wallet",
            element: <MerchantWallet />,
            loader: merchantWalletLoader,
          },
          {
            path: "product/form",
            element: <ProductForm />,
            action: productFormAction,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />, // Public routes
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Login />, action: loginAction },
      { path: "signup", element: <SignUp />, action: signupAction },
    ],
  },
  { path: "*", element: <NotFoundPage /> }, // fallback
]);

export default router;
