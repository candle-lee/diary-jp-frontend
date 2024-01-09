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
        <div className="text-[#FFF] text-base font-normal leading-4 p-2 border-b border-white border-opacity-15 bg-[#000]">
          U-DATA
        </div>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
