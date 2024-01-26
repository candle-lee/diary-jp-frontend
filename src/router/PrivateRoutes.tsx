import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useAppSelector } from "../redux/hooks";
import { hasPasscodeCookie } from "../utils/cookie/checkCookie";

const LazyVerifyUserPage = lazy(() => import("../pages/verifyuser.page"));
const LazyForgetPassVerifyUserPage = lazy(
  () => import("../pages/forgetpassverifyuser.page")
);
const LazyResetPasswordPage = lazy(() => import("../pages/resetpassword.page"));
const LazyMainPage = lazy(() => import("../pages/main.page"));
const LazyVideoHandlingPage = lazy(() => import("../pages/videohandling.page"));
const LazyVideoListPage = lazy(() => import("../pages/videolist.page"));
const LazyVideoDetailPage = lazy(() => import("../pages/videodetail.page"));

const PrivateRoutes = () => {
  const isAutherized = useAppSelector(
    (state) => state.authReducer.isAutherized
  );
  const isCookie = useAppSelector((state) => state.authReducer.isCookie);

  return {
    element: <Layout />,
    children: [
      {
        path: "/verify-user",
        element: isAutherized ? (
          <LazyVerifyUserPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/forgetpassword-validation",
        element: isCookie ? (
          <LazyForgetPassVerifyUserPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/reset-password",
        element: isCookie ? (
          <LazyResetPasswordPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/main",
        element: isAutherized ? (
          <LazyMainPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/video-recording",
        element: isAutherized ? (
          <LazyVideoHandlingPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/video-list",
        element: isAutherized ? (
          <LazyVideoListPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/video-list/:videoId",
        element: isAutherized ? (
          <LazyVideoDetailPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PrivateRoutes;
