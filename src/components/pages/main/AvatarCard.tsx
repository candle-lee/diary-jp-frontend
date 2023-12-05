import { useGetProfile } from "../../../api/auth";
import { DefaultAvatar } from "../../common";
import QuantityBox from "./QuantityBox";

const AvatarCard: React.FC = () => {
  const data = useGetProfile();
  return (
    <div className="w-full h-[365px] flex-shrink-0 rounded-[20px] bg-[#FFF] px-[17px] pt-[18px]">
      <div className="bg-[url('/src/assets/img/avatar-background.png')] bg-cover bg-gray-50 w-full h-[131px] flex-shrink-0 rounded-2xl bg-center  bg-no-repeat flex justify-center">
        <div className="absolute mt-[85px]">
          <DefaultAvatar size="lg" />
        </div>
      </div>
      <div>
        <div className="text-center text-[#2B3674] font-bold font-dm-sans text-xl leading-[32px] tracking-[-0.4px] mt-[56px]">
          {data.username}
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
