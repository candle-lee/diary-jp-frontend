import MoreHorizSVGIcon from "../../assets/icons/MoreHorizSVGIcon";

const Recommend = () => {
  return (
    <div className="w-full h-[554px] bg-[#FFF] rounded-[30px] p-8 shadow-[14px_17px_40px_4px_rgba(112, 144, 176, 0.08)]">
      <div className="flex justify-between">
        <p className="text-[#2B3674] font-bold text-2xl leading-8 tracking-tight">
          レコメンド
        </p>
        <button
          type="button"
          className="bg-[#F4F7FE] rounded-[10px] w-[37px] h-[37px] flex items-center justify-center"
        >
          <MoreHorizSVGIcon />
        </button>
      </div>
      <div>
        <ul className="mt-4 space-y-1 list-disc list-inside text-[#000] font-bold text-sm leading-8 tracking-tighter">
          <li>こういうことを振り返ると良いのでは?</li>
          <li>動画から画像を抽出して、一覧で見せるなど</li>
        </ul>
      </div>
    </div>
  );
};

export default Recommend;
