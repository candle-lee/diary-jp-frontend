import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useAppSelector } from "../redux/hooks";

const LazyMainPage = lazy(() => import("../pages/main.page"));
const LazyVideoHandlingPage = lazy(() => import("../pages/videohandling.page"));
const LazyVideoListPage = lazy(() => import("../pages/videolist.page"));
const LazyVideoDetailPage = lazy(() => import("../pages/videodetail.page"));

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
          <LazyMainPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      {
        path: "/video",
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
