import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";

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
      { path: "*", element: <Navigate to="/signin" replace /> },
    ],
  };
};

export default PublicRoutes;
