import { useNavigate } from "react-router-dom";
import { VideoCard } from "../components/pages/videolist";
import AddIcon from "../components/icons/AddIcon";
import { useGetMedias } from "../api/video";
import { CircleSpinner } from "../components/common";
import { useAppSelector } from "../redux/hooks";
import { useGetAuthProfile } from "../api/auth";
import { convertBytes } from "../utils";

const VideoListPage: React.FC = () => {
  useGetAuthProfile()
  const navigate = useNavigate();
  const {medias, isLoading, error} = useGetMedias();
  const totalSize = useAppSelector(state => state.mediaReducer.totalSize);
  const auth = useAppSelector(state => state.authReducer.auth);
  if (isLoading) {
    return <CircleSpinner />;
  }
  if (error) {
    console.log(error);
    return;
  }
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
                  {auth.username}
                </p>
              </div>
              <p className="text-[#FFF] text-xs lg:text-base font-normal leading-[125%] tracking-[-0.015rem] lg:tracking-[-0.02rem]">
                 {convertBytes(totalSize)} / 200GB
              </p>
            </div>
            <div className="lg:hidden cursor-pointer" onClick={() => navigate('/video-recording')}>
              <AddIcon />
            </div>
            <div className="hidden lg:flex">
              <div
                onClick={() => navigate('/video-recording')}
                className="flex h-10 py-1 px-3 items-center bg-[#FFF] rounded-xl cursor-pointer"
              >
                Add your data
              </div>
            </div>
          </div>
          {/* <div className="border border-solid border-white border-opacity-15 flex justify-center items-center rounded-xl py-[2.25rem] mt-12 lg:py-14 lg:mt-14">
            <div className="flex flex-col gap-4 items-center">
              <p className="text-white text-sm font-medium lg:text-2xl lg:font-normal leading-[125%]">
                You haven't upload any video yet.
              </p>
              <a
                href="/video-recording"
                className="h-10 py-1 px-3 text-sm bg-[#FFF] rounded-xl max-w-32 flex justify-center items-center"
              >
                Add your data
              </a>
            </div>
          </div> */}
          <div className="flex gap-6 mt-12 lg:mt-14">
            <div className="flex flex-col gap-[0.38rem] lg:gap-2 w-full">
              {
                medias.map(media => (
                  <div onClick={() => navigate(`/video-list/${media.url}`)} key={media.url}>
                    <VideoCard media={media} />
                  </div>
                ))
              }
            </div>
            {/* <div className="flex flex-col gap-20 lg:gap-44">
              <div className="text-white text-base font-medium leading-[100%] bg-black z-10">
                2024
              </div>
              <div className="text-white text-base font-medium leading-[100%] bg-black z-10">
                2023
              </div>
              <div className="text-white text-base font-medium leading-[100%] bg-black z-10">
                2022
              </div>
              <div className="text-white text-base font-medium leading-[100%] bg-black z-10">
                2021
              </div>
              <div className="text-white text-base font-medium leading-[100%] bg-black z-10">
                2020
              </div>
            </div>
            <div className="absolute w-[25rem] lg:w-[49.5rem]">
              <div className="relative top-[12.5rem] right-[-31.4rem] lg:right-[-19rem] lg:top-[24.7rem] w-full flex items-center rotate-90">
                <input
                  type="range"
                  className="transparent h-[2px] w-full cursor-pointer appearance-none border-transparent bg-white bg-opacity-50 video-range"
                  id="videoRange"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoListPage;
