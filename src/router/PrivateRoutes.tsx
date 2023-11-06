import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useAppSelector } from "../redux/hooks";
import VideoHandlingPage from "../pages/videohandling.page";

const MainPage = lazy(() => import("../pages/main.page"));
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
        path: "/video",
        element: isAutherized ? (
          <VideoHandlingPage />
        ) : (
          <Navigate to="/signin" replace />
        ),
      },
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PrivateRoutes;
