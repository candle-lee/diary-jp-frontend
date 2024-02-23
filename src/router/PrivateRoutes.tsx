import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

const LazyVerifyUserPage = lazy(() => import("../pages/verifyuser.page"));
const LazyMainPage = lazy(() => import("../pages/main.page"));
const LazyVideoHandlingPage = lazy(() => import("../pages/videohandling.page"));
const LazyVideoListPage = lazy(() => import("../pages/videolist.page"));
const LazyVideoDetailPage = lazy(() => import("../pages/videodetail.page"));

const PrivateRoutes = () => {

  return {
    element: <Layout />,
    children: [
      {
        path: "/verify-user",
        element: <LazyVerifyUserPage />
      },
      {
        path: "/main",
        element: <LazyMainPage />
      },
      {
        path: "/video-recording",
        element: <LazyVideoHandlingPage />
      },
      {
        path: "/video-list",
        element: <LazyVideoListPage />
      },
      {
        path: "/video-list/:videoId",
        element: <LazyVideoDetailPage />
      },
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PrivateRoutes;
