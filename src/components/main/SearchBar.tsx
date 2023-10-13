import DefaultAvatar from "../common/DefaultAvatar";
import InfoSVGIcon from "../../assets/icons/InfoSVGIcon";
import MoonSVGIcon from "../../assets/icons/MoonSVGIcon";
import RingSVGIcon from "../../assets/icons/RingSVGIcon";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="flex justify-around p-[10px] w-[422px] h-[61px] rounded-[30px] bg-[#FFF] shadow-[14px 17px 40px 4px] shadow-[rgba(112, 144, 176, 0.08)] p-[10px]">
      <div className="">
        <SearchInput />
      </div>
      <div className="flex items-center xl:gap-2 lg:gap-1 md:gap-1 sm:gap-0">
        <RingSVGIcon />
        <MoonSVGIcon />
        <InfoSVGIcon />
      </div>
      <div className="ml-[5px]">
        <DefaultAvatar size="md" />
      </div>
    </div>
  );
};

export default SearchBar;
