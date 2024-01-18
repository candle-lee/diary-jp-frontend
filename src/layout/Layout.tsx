import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CircleSpinner } from "../components/common";

const Layout = () => {
  return (
    <div className="flex flex-col w-full">
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center">
            <CircleSpinner />
          </div>
        }
      >
        <div className="flex flex-col h-full">
          <div className="sticky top-0 flex items-center bg-[#000] lg:h-16 h-8 border-b border-white border-opacity-15">
            <p className="text-[#FFF] font-sans lg:text-2xl md:text-base sm:text-base font-normal lg:leading-6 md:leading-4 sm:leading-4 p-2">
              U-DATA
            </p>
          </div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
