import VideoHistoryItem from "./VideoHistoryItem";
import { useGetMedias } from "../../../api/video";
import { CircleSpinner } from "../../common";

const VideoHistory: React.FC = () => {
  const { medias, error, isLoading } = useGetMedias();
  if (error) {
    return <div> Error </div>;
  }
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircleSpinner />
      </div>
    );
  }
  return (
    <div className="w-full h-[554px] bg-[#FFF] rounded-[30px] p-8 shadow-[14px_17px_40px_4px_rgba(112, 144, 176, 0.08)]">
      <p className="text-[#2B3674] font-bold text-2xl leading-8 tracking-tight">
        これまでの動画
      </p>
      <p className="text-base font-normal leading-7 tracking-tight text-[#A3AED0] my-4">
        これまで記録した動画を見返してみましょう。
      </p>
      <div
        className="space-y-4 overflow-y-auto p-3 rounded-lg"
        style={{ maxHeight: "400px" }}
      >
        {medias?.map(
          (
            media: { id: number; title: string; url: string },
            index: number
          ) => (
            <VideoHistoryItem title={media.title} url={media.url} key={index} />
          )
        )}
      </div>
    </div>
  );
};

export default VideoHistory;
