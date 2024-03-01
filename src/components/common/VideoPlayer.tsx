import { useParams } from "react-router-dom";
import { VideoParams } from "../../constant/interfaces";
import { useFetchVideo } from "../../api/video";

const VideoPlayer: React.FC = () => {
  const { videoId } = useParams<VideoParams>();
  const {data: videoBlob, isLoading, error} = useFetchVideo(videoId);

    // Create a URL from the video blob
  const videoUrl = videoBlob ? URL.createObjectURL(videoBlob) : undefined;

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading video</div>;  
  return (
    <div className="flex flex-col gap-6">
      <video className="h-full w-full rounded-lg border border-solid border-white border-opacity-15" controls>
        <source
          src={videoUrl}
          type="video/mp4"
        />
      </video>
      {/* <div className="flex justify-between gap-[0.62rem] w-full items-center">
        <div>
          <VideoPlayIcon />
        </div>
        <div className="w-full flex items-center">
          <input
            type="range"
            className="transparent h-[2px] w-full cursor-pointer appearance-none border-transparent bg-white bg-opacity-50 video-range"
            id="videoRange"
          />
        </div>
        <div className="flex gap-1 text-white text-xs leading-[125%] tracking-[-0.015rem]">
          <div className="flex gap-[0.12rem]">
            <p>00</p>
            <p>:</p>
            <p>01</p>
            <p>:</p>
            <p>02</p>
          </div>
          <div>/</div>
          <div className="flex gap-[0.12rem]">
            <p>00</p>
            <p>:</p>
            <p>05</p>
            <p>:</p>
            <p>13</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default VideoPlayer;
