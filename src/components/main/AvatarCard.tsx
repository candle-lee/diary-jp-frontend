import DefaultAvatar from "../common/DefaultAvatar";
import QuantityBox from "./QuantityBox";

const AvatarCard = () => {
    return (
        <div className="w-[552px] h-[365px] flex-shrink-0 rounded-[20px] bg-[#FFF] px-[17px] pt-[18px]">
            <div className="bg-[url('/src/assets/img/avatar-background.png')] bg-cover bg-gray-50 w-[518px] h-[131px] flex-shrink-0 rounded-2xl bg-center  bg-no-repeat flex justify-center">
                <div className="absolute mt-[85px]">
                    <DefaultAvatar />
                </div>
            </div>
            <div className="flex justify-center mt-[133px] gap-4">
                <QuantityBox />
                <QuantityBox />
                <QuantityBox />
            </div>
        </div>
    )
}

export default AvatarCard;