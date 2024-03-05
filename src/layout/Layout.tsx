import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CircleSpinner } from "../components/common";
import Header from "../components/Header";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center">
            <CircleSpinner />
          </div>
        }
      >
        <div className="flex flex-col flex-grow">
          <Header />
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default Layout;
