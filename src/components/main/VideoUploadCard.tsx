import DropZone from "./DropZone";

const VideoUploadCard = () => {
  return (
    <div className="w-full h-[365px] bg-[#FFF] rounded-[20px] p-7">
      <div className="grid grid-cols-10">
        <div className="h-[311px] rounded-xl col-span-6">
          <DropZone />
        </div>
        <div className="col-span-4">
          <p className=" text-[#2B3674] text-xl font-bold leading-8 tracking-tight mt-12">
            以下の質問に答えてみましょう
          </p>
          <ul className="pl-5 space-y-1 list-disc list-inside text-[#000] font-bold text-sm leading-8 tracking-tighter">
            <li>あなたが今日食べたものは?</li>
            <li>何をしましたか?</li>
            <li>楽しかったことは? </li>
            <li>明日実行したいことは? </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoUploadCard;
