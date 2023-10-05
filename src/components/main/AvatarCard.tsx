import DefaultAvatar from "../common/DefaultAvatar";

const AvatarCard = () => {
    return (
        <div className="w-[552px] h-[365px] flex-shrink-0 rounded-[20px] bg-[#FFF]">
            <div className="bg-[url('/src/assets/img/avatar-background.png')] bg-cover bg-gray-50 w-[518px] h-[131px] mx-[17px] mt-[18px] flex-shrink-0 rounded-2xl bg-center  bg-no-repeat flex justify-center">
                <div className="-mb-[40px] flex items-end">
                    <DefaultAvatar />
                </div>
            </div>
        </div>
    )
}

export default AvatarCard;