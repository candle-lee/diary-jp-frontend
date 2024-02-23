import { IMedia } from "../../../constant/interfaces";
import { converToDateTime } from "../../../utils";

interface VideoCardProps {
  media: IMedia;
}

const VideoCard: React.FC<VideoCardProps> = ({media}) => {
  return (
    <div className="flex items-center bg-[url('/src/assets/img/card-background.png')] h-24 lg:h-48 bg-cover border border-solid border-white border-opacity-15 flex-shrink-0 rounded-xl bg-center  bg-no-repeat cursor-pointer">
      <div className="flex flex-col gap-[0.19rem] pl-5">
        <p className="text-[#FFF] text-base leading-[100%] font-medium lg:text-2xl lg:font-normal lg:leading-[125%]">
          {media.title}
        </p>
        <p className="text-[#FFF] text-xs font-normal leading-[100%]">
          { converToDateTime(media.url) }
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
