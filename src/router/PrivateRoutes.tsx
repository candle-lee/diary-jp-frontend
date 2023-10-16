import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

const MainPage = lazy(() => import("../pages/main.page"));
const VerifyUserPage = lazy(() => import("../pages/verifyuser.page"));
const ForgetPasswordPage = lazy(() => import("../pages/forgetpassword.page"));
const ForgetPassVerifyUserPage = lazy(
  () => import("../pages/forgetpassverifyuser.page")
);
const ResetPasswordPage = lazy(() => import("../pages/resetpassword.page"));

const PrivateRoutes = () => {
  return {
    element: <Layout />,
    children: [
      { path: "/main", element: <MainPage /> },
      { path: "/verify-user", element: <VerifyUserPage /> },
      { path: "/forgetpassword", element: <ForgetPasswordPage /> },
      {
        path: "/forgetpassword-validation",
        element: <ForgetPassVerifyUserPage />,
      },
      { path: "/reset-password", element: <ResetPasswordPage /> },
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PrivateRoutes;
