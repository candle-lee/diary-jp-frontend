import { useNavigate } from "react-router-dom";
import VideoPlayer from "../components/common/VideoPlayer";
import SeeMoreIcon from "../components/icons/SeeMoreIcon";

const VideoDetailPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#000] flex justify-center h-full">
      <div className="w-full max-w-3xl px-6">
        <div className="flex flex-col gap-6 pt-6 lg:pt-[4.75rem] lg:gap-8">
          <p
            className="text-[#FFF] text-xs font-normal leading-[100%] cursor-pointer lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]"
            onClick={() => navigate("/video-list")}
          >
            Back to list
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <p className="text-[#FFF] text-4xl font-bold leading-[125%]">
                Movie Title
              </p>
              <SeeMoreIcon />
            </div>
            <p className="text-[#FFF] text-xs font-normal leading-[100%] lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]">
              Jan 1st, 2024
            </p>
            <p className="text-white text-opacity-50 text-xs font-normal leading-[100%] lg:text-sm lg:leading-[125%] lg:tracking-[-0.0175rem]">
              504MB
            </p>
          </div>
        </div>
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
