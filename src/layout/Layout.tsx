import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CircleSpinner } from "../components/common";

const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <CircleSpinner />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
