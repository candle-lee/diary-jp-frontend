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
        <div className="flex items-center bg-[#000] lg:h-16 md:h-8 sm:h-8 border-b border-white border-opacity-15">
          <p className="text-[#FFF] font-sans lg:text-2xl md:text-base sm:text-base font-normal lg:leading-6 p-2">
            U-DATA
          </p>
        </div>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
