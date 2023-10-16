import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CircleSpinner } from "../components/common/CircleSpinner";

const Layout = () => {
  return (
    <>
      <Suspense fallback={<CircleSpinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
