import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes, PublicRoutes } from "./router";
import { useAppSelector } from "./redux/hooks";

function App() {
  const client = new QueryClient();
  const isAuthenticated = useAppSelector(
    (state) => state.authReducer.isAutherized
  );
  const router = createBrowserRouter([
    isAuthenticated ? PrivateRoutes() : PublicRoutes(),
  ]);
  return (
    <>
      <QueryClientProvider client={client}>
        <ToastContainer />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
