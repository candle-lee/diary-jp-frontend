import VideoHistoryItem from "./VideoHistoryItem";

const VideoHistory = () => {
  return (
    <div className="w-full h-[554px] bg-[#FFF] rounded-[30px] p-8 shadow-[14px_17px_40px_4px_rgba(112, 144, 176, 0.08)]">
      <p className="text-[#2B3674] font-bold text-2xl leading-8 tracking-tight">
        これまでの動画
      </p>
      <p className="text-base font-normal leading-7 tracking-tight text-[#A3AED0] my-4">
        これまで記録した動画を見返してみましょう。
      </p>
      <div className="space-y-4">
        <VideoHistoryItem />
        <VideoHistoryItem />
        <VideoHistoryItem />
      </div>
    </div>
  );
};

export default VideoHistory;
