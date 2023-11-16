import { Link } from "react-router-dom";
// import ArrowDownloadSVGIcon from "../../assets/icons/ArrowDownloadSVGIcon";
import VideoPlaySVGIcon from "../../assets/icons/VideoPlaySVGIcon";
import TrushBinSVGIcon from "../../assets/icons/TrashBinSVGIcon";
// import { useVideoDownload } from "../../api/video/useVideoDownload";
// import { useState } from "react";

const VideoHistoryItem = ({ title, url }: { title: string; url: string }) => {
  // Use your custom hook
  // const [mediaId, setMediaId] = useState<string | null>(null);
  // const { data, error, isLoading } = useVideoDownload(mediaId);
  // if (data) {
  //   const url = window.URL.createObjectURL(data);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = mediaId || "video.mp4";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   window.URL.revokeObjectURL(url);
  // }
  // const handleDownloadClick = () => {
  //   setMediaId(url);
  // };
  return (
    <div className="h-[120px] rounded-2xl bg-[#FFF] shadow-[0_18px_40px_0px_rgba(0,0,0,0.3)] p-4 flex items-center gap-5">
      <img
        className="rounded-lg"
        src="/src/assets/img/video-item.png"
        alt="video_item"
      />
      <div className="">
        {/* <p className="text-[#2B3674] font-medium text-base leading-4 tracking-[-0.32px] mb-2">
          {title}
        </p> */}
        <p className="text-[#A3AED0] font-medium text-sm leading-5 tracking-[-0.28px]">
          {" "}
          {url}{" "}
        </p>
      </div>
      <div className="flex gap-6 ml-auto">
        {/* <div onClick={() => handleDownloadClick()}>
          <ArrowDownloadSVGIcon />
        </div> */}
        <VideoPlaySVGIcon />
        <TrushBinSVGIcon />
      </div>
    </div>
  );
};

export default VideoHistoryItem;
