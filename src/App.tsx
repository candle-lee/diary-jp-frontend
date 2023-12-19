import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoutes, PublicRoutes } from "./router";

function App() {
  const client = new QueryClient();
  const router = createBrowserRouter([PrivateRoutes(), PublicRoutes()]);

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
