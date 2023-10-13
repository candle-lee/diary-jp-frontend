import { Link } from "react-router-dom";
import PenSVGIcon from "../../assets/icons/PenSVGIcon";

const VideoHistoryItem = () => {
  return (
    <div className="h-[120px] rounded-2xl bg-[#FFF] shadow-[0_18px_40px_0px_rgba(0,0,0,0.3)] p-4 flex items-center gap-5">
      <img
        className="rounded-lg"
        src="/src/assets/img/video-item.png"
        alt="video_item"
      />
      <div className="">
        <p className="text-[#2B3674] font-medium text-base leading-4 tracking-[-0.32px] mb-2">
          日付
        </p>
        <p className="text-[#A3AED0] font-medium text-sm leading-5 tracking-[-0.28px]">
          Project #1
          <Link
            to="#"
            className="text-[#4318FF] text-sm font-medium leading-5 tracking-tighter-[-0.28px] underline"
          >
            {" "}
            話したことを自動で文字起こし{" "}
          </Link>
        </p>
      </div>
      <div className="w-[18px] h-[18px]">
        <PenSVGIcon />
      </div>
    </div>
  );
};

export default VideoHistoryItem;
