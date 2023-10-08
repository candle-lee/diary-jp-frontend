import DefaultAvatar from "../common/DefaultAvatar";
import QuantityBox from "./QuantityBox";

const AvatarCard = () => {
  return (
    <div className="w-[552px] h-[365px] flex-shrink-0 rounded-[20px] bg-[#FFF] px-[17px] pt-[18px]">
      <div className="bg-[url('/src/assets/img/avatar-background.png')] bg-cover bg-gray-50 w-[518px] h-[131px] flex-shrink-0 rounded-2xl bg-center  bg-no-repeat flex justify-center">
        <div className="absolute mt-[85px]">
          <DefaultAvatar size="87px" />
        </div>
      </div>
      <div>
        <div className="text-center text-[#2B3674] font-bold font-dm-sans text-xl leading-[32px] tracking-[-0.4px] mt-[56px]">
          Adela Parkson
        </div>
        <div className="text-center text-[#A3AED0] font-bold text-[14px] leading-6 tracking-[-0.28px] ">
          How was your day today?
        </div>
      </div>
      <div className="flex justify-center mt-[35px] gap-4">
        <QuantityBox />
        <QuantityBox />
        <QuantityBox />
      </div>
    </div>
  );
};

export default AvatarCard;
