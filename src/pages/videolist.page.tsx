import { useNavigate } from "react-router-dom";
import { VideoCard } from "../components/pages/videolist";
import AddIcon from "../components/icons/AddIcon";

const VideoListPage: React.FC = () => {
  const navigate = useNavigate();
  const videoId = 123;
  return (
    <div className="bg-[#000] flex justify-center h-full">
      <div className="w-full max-w-3xl px-6">
        <div className="flex flex-col justify-center py-12 lg:py-[4.75rem]">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-[0.62rem] lg:gap-4">
              <div className="flex flex-col lg:flex-row">
                <p className="text-[#FFF] lg:text-7xl text-5xl font-normal leading-[100%]">
                  Hello,&nbsp;
                </p>
                <p className="text-[#FFF] lg:text-7xl text-5xl font-normal leading-[100%]">
                  Kota
                </p>
              </div>
              <p className="text-[#FFF] text-xs lg:text-base font-normal leading-[125%] tracking-[-0.015rem] lg:tracking-[-0.02rem]">
                126.3GB / 200GB
              </p>
            </div>
            <div className="lg:hidden">
              <AddIcon />
            </div>
            <div className="hidden lg:flex">
              <button
                type="button"
                className="flex h-10 py-1 px-3 items-center bg-[#FFF] rounded-xl"
              >
                Add your data
              </button>
            </div>
          </div>
          <div className="flex gap-6 mt-12 lg:mt-14">
            <div className="flex flex-col gap-[0.38rem] lg:gap-2 w-full">
              <div onClick={() => navigate(`/video-list/${videoId}`)}>
                <VideoCard />
              </div>
              <div>
                <VideoCard />
              </div>
              <div>
                <VideoCard />
              </div>
              <div>
                <VideoCard />
              </div>
            </div>
            <div className="text-white text-base font-medium leading-[100%]">
              2024
            </div>
            <div className="absolute">
              <div className="relative right-0 top-10 w-full flex items-center rotate-90">
                <input
                  type="range"
                  className="transparent h-[2px] w-full cursor-pointer appearance-none border-transparent bg-white bg-opacity-50 video-range"
                  id="videoRange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoListPage;
