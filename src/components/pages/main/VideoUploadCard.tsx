import { useNavigate } from "react-router-dom";
import DropZone from "./DropZone";

const VideoUploadCard: React.FC = () => {
  const navigator = useNavigate();
  return (
    <div className="w-full h-[365px] bg-[#FFF] rounded-[20px] p-7">
      <div className="h-[100px] rounded-xl col-span-6">
        <DropZone />
      </div>
      <div className="col-span-4">
        <p className=" text-[#2B3674] text-xl font-bold leading-8 tracking-tight mt-3">
          以下の質問に答えてみましょう
        </p>
        <ul className="pl-6 list-disc list-inside text-[#000] font-bold text-sm leading-8 tracking-tighter">
          <li>あなたが今日食べたものは?</li>
          <li>何をしましたか?</li>
          <li>楽しかったことは? </li>
          <li>明日実行したいことは? </li>
        </ul>
        <button
          type="button"
          className="w-full mt-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => navigator("/video")}
        >
          Record Now
        </button>
      </div>
    </div>
  );
};

export default VideoUploadCard;
