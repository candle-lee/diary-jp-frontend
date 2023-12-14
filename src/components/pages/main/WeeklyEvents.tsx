import WeeklyEventItem from "./WeeklyEventItem";

const WeeklyEvents: React.FC = () => {
  return (
    <div className="w-full h-[554px] bg-[#FFF] rounded-[30px] p-8 shadow-[14px_17px_40px_4px_rgba(112, 144, 176, 0.08)]">
      <p className="text-[#2B3674] font-bold text-2xl leading-8 tracking-tight">
        直近1週間のサマリ
      </p>
      <p className="text-base font-normal leading-7 tracking-tight text-[#A3AED0] mt-4 mb-12">
        文字起こしした内容をChatgptを使って、サマル
        必要な情報リンクとかを表示させる{" "}
      </p>
      <div className="grid grid-cols-2 gap-4">
        <WeeklyEventItem />
        <WeeklyEventItem />
        <WeeklyEventItem />
        <WeeklyEventItem />
        <WeeklyEventItem />
        <WeeklyEventItem />
      </div>
    </div>
  );
};

export default WeeklyEvents;
