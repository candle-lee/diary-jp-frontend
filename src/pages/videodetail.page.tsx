import { useNavigate } from "react-router-dom";
import VideoPlayer from "../components/common/VideoPlayer";
import SeeMoreIcon from "../components/icons/SeeMoreIcon";
import { useState } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { TitleEdit } from "../components/pages/videodetail";

const VideoDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isTitleEdit, setIsTitleEdit] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => {
    setIsDropdownOpen(false);
  });

  return (
    <div className="bg-[#000] flex justify-center h-full">
      <div className="w-full max-w-3xl px-6">
        {isTitleEdit ? (
          <div className="mt-12 lg:mt-[4.75rem]">
            <TitleEdit setIsTitleEdit={setIsTitleEdit} />
          </div>
        ) : (
          <div className="flex flex-col gap-6 pt-6 lg:pt-[4.75rem] lg:gap-8">
            <div>
              <button
                className="text-[#FFF] text-xs font-normal leading-[100%] cursor-pointer lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]"
                onClick={() => navigate("/video-list")}
              >
                Back to list
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <p className="text-[#FFF] text-4xl font-bold leading-[125%]">
                  Movie Title
                </p>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="focus:outline-none w-4 h-4"
                  >
                    <SeeMoreIcon />
                  </button>
                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 z-10 mt-2  origin-top-right rounded-lg bg-black bg-opacity-80 ring-1 ring-black ring-opacity-5 focus:outline-none border border-solid border-white border-opacity-25 min-w-[12.5rem]"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      ref={ref}
                    >
                      <div className="py-1" role="none">
                        <li
                          onClick={() => {
                            setIsTitleEdit(true);
                            setIsDropdownOpen(false);
                          }}
                          className="text-[white] whitespace-nowrap text-opacity-75 font-normal leading-[125%] tracking-[-0.0175rem] block px-4 py-2 text-sm cursor-pointer"
                          role="menuitem"
                          id="menu-item-0"
                        >
                          Edit Title
                        </li>
                        <li
                          className="text-[#ED2B2B] whitespace-nowrap text-opacity-75 font-normal leading-[125%] tracking-[-0.0175rem] block px-4 py-2 text-sm cursor-pointer"
                          role="menuitem"
                          id="menu-item-1"
                        >
                          Delete
                        </li>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-[#FFF] text-xs font-normal leading-[100%] lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]">
                Jan 1st, 2024
              </p>
              <p className="text-white text-opacity-50 text-xs font-normal leading-[100%] lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]">
                504MB
              </p>
            </div>
          </div>
        )}
        <div className="mt-6 mb-4 lg:mt-14 lg:mb-8">
          <VideoPlayer />
        </div>
        <div className="border-t border-solid border-white border-opacity-15 mb-8 lg:mb-[4.75rem]">
          <p className="text-[#FFF] text-xs font-normal leading-[100%] py-4 lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]">
            Script
          </p>
          <p className="text-[#FFF] text-base font-normal leading-[125%] break-word">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
