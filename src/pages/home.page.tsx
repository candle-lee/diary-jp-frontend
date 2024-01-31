import { useNavigate } from "react-router-dom";
import { AutherizedUser } from "../components/common";
import { useIsAutherized } from "../api/auth";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const isAutherized = useIsAutherized();
  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div
            className="items-center justify-between w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded- md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/main"
                  className="block py-2 pl-3 pr-4 "
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    navigate("signin");
                  }}
                  className="block py-2 pl-3 pr-4"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => {
                    navigate("signup");
                  }}
                  className="block py-2 pl-3 pr-4"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomePage;
