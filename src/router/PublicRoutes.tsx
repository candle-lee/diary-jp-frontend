import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

const LazyHomePage = lazy(() => import("../pages/home.page"));
const LazySignInPage = lazy(() => import("../pages/signin.page"));
const LazySignUpPage = lazy(() => import("../pages/signup.page"));
const LazyPrivacypolicyPage = lazy(() => import("../pages/privacypolicy.page"));
const LazyForgetPasswordPage = lazy(
  () => import("../pages/forgetpassword.page")
);
const LazyForgetPassVerifyUserPage = lazy(
  () => import("../pages/forgetpassverifyuser.page")
);
const LazyResetPasswordPage = lazy(() => import("../pages/resetpassword.page"));
const LazyVerifyUserPage = lazy(() => import("../pages/verifyuser.page"));

const PublicRoutes = () => {
  return {
    element: <Layout />,
    children: [
      { path: "/", element: <LazyHomePage /> },
      { path: "/signin", element: <LazySignInPage /> },
      { path: "/signup", element: <LazySignUpPage /> },
      { path: "/privacy-policy", element: <LazyPrivacypolicyPage /> },
      {
        path: "/forgetpassword",
        element: <LazyForgetPasswordPage />,
      },
      {
        path: "/forgetpassword-validation",
        element: <LazyForgetPassVerifyUserPage />,
      },
      {
        path: "/reset-password",
        element: <LazyResetPasswordPage />,
      },
      {
        path: "/verify-user",
        element: <LazyVerifyUserPage />,
      },
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PublicRoutes;
