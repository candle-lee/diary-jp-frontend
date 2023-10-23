import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useAppSelector } from "../redux/hooks";

const MainPage = lazy(() => import("../pages/main.page"));
const VerifyUserPage = lazy(() => import("../pages/verifyuser.page"));
const ForgetPasswordPage = lazy(() => import("../pages/forgetpassword.page"));
const ForgetPassVerifyUserPage = lazy(
  () => import("../pages/forgetpassverifyuser.page")
);
const ResetPasswordPage = lazy(() => import("../pages/resetpassword.page"));

const PrivateRoutes = () => {
  const isAutherized = useAppSelector(
    (state) => state.authReducer.isAutherized
  );

  return {
    element: <Layout />,
    children: [
      {
        path: "/main",
        element: isAutherized ? (
          <MainPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/verify-user",
        element: isAutherized ? (
          <VerifyUserPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/forgetpassword",
        element: isAutherized ? (
          <ForgetPasswordPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/forgetpassword-validation",
        element: isAutherized ? (
          <ForgetPassVerifyUserPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/reset-password",
        element: isAutherized ? (
          <ResetPasswordPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PrivateRoutes;
