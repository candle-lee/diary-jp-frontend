import { lazy, Suspense } from "react";
import type { RouteObject } from 'react-router-dom';
import Layout from "../layout/Layout";

const Loadable = (Component: React.ComponentType<any>) => (props: JSX.IntrinsicAttributes) => (
  <Suspense fallback={<p>loading</p>}>
    <Component {...props} />
  </Suspense>
);

const SignInPage = Loadable(lazy(() => import('../pages/signin.page')));
const HomePage = Loadable(lazy(() => import('../pages/home.page')));

const authRoutes: RouteObject = {
  path: '*',
  children: [
  ],
};

const normalRoutes: RouteObject = {
  path: '*',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'signin',
      element: <SignInPage />,
    },
  ],
};

const routes: RouteObject[] = [authRoutes, normalRoutes];

export default routes;
