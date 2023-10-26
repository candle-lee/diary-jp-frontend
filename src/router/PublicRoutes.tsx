import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import VerifyUserPage from "../pages/verifyuser.page";
import ForgetPasswordPage from "../pages/forgetpassword.page";
import ForgetPassVerifyUserPage from "../pages/forgetpassverifyuser.page";
import ResetPasswordPage from "../pages/resetpassword.page";

const SignInPage = lazy(() => import("../pages/signin.page"));
const SignUpPage = lazy(() => import("../pages/signup.page"));
const HomePage = lazy(() => import("../pages/home.page"));

const PublicRoutes = () => {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/signin", element: <SignInPage /> },
      { path: "/signup", element: <SignUpPage /> },
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

export default PublicRoutes;
