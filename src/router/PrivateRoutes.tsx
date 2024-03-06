import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

const LazyVideoHandlingPage = lazy(() => import("../pages/videohandling.page"));
const LazyVideoListPage = lazy(() => import("../pages/videolist.page"));
const LazyVideoDetailPage = lazy(() => import("../pages/videodetail.page"));

const PrivateRoutes = () => {

  return {
    element: <Layout />,
    children: [
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
