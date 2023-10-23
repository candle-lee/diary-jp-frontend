import DefaultAvatar from "../common/DefaultAvatar";
import InfoSVGIcon from "../../assets/icons/InfoSVGIcon";
import MoonSVGIcon from "../../assets/icons/MoonSVGIcon";
import RingSVGIcon from "../../assets/icons/RingSVGIcon";
import SearchInput from "./SearchInput";
import { Dropdown } from "flowbite-react";
import { useAppDispatch } from "../../redux/hooks";
import { useLogout } from "../../api/auth/hooks/useLogout";
import { setAutherStatus } from "../../redux/slices/auth.slice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const logout = useLogout();
  return (
    <div className="flex justify-around p-[10px] w-[422px] h-[61px] rounded-[30px] bg-[#FFF] shadow-[14px 17px 40px 4px] shadow-[rgba(112, 144, 176, 0.08)] p-[10px]">
      <div className="">
        <SearchInput />
      </div>
      <div className="flex items-center xl:gap-2 lg:gap-1 md:gap-1 sm:gap-0">
        <RingSVGIcon />
        <MoonSVGIcon />
        <InfoSVGIcon />
      </div>
      <div className="ml-[5px]">
        <Dropdown arrowIcon={false} inline label={<DefaultAvatar size="md" />}>
          {/* <Dropdown.Header>
            <span className="block text-sm">Neil Sims</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>My profile</Dropdown.Item>
          <Dropdown.Item>Account settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            <svg
              className="mr-2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            &nbsp;My likes
          </Dropdown.Item>
          <Dropdown.Item>
            <svg
              className="mr-2 h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            &nbsp;Collections
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="flex w-full items-center">
              <svg
                className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
              &nbsp;Pro version
            </span>
            <svg
              className="h-5 w-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Dropdown.Item>
          <Dropdown.Divider /> */}
          <Dropdown.Item
            onClick={() => {
              logout();
              dispatch(setAutherStatus(false));
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
};

export default SearchBar;
