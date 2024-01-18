const VideoCard: React.FC = () => {
  return (
    <div className="flex items-center bg-[url('/src/assets/img/card-background.png')] h-24 lg:h-48 bg-cover border border-solid border-white border-opacity-15 flex-shrink-0 rounded-xl bg-center  bg-no-repeat">
      <div className="flex flex-col gap-[0.19rem] pl-5">
        <p className="text-[#FFF] text-base leading-[100%] font-medium lg:text-2xl lg:font-normal lg:leading-[125%]">
          Movie Title
        </p>
        <p className="text-[#FFF] text-xs font-normal leading-[100%]">
          Jan 1st, 2024
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
