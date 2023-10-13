import DefaultAvatar from "../common/DefaultAvatar";
import InfoSVGIcon from "../../assets/icons/InfoSVGIcon";
import MoonSVGIcon from "../../assets/icons/MoonSVGIcon";
import RingSVGIcon from "../../assets/icons/RingSVGIcon";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="flex p-[10px] w-[422px] h-[61px] rounded-[30px] bg-[#FFF] shadow-[14px 17px 40px 4px] shadow-[rgba(112, 144, 176, 0.08)] p-[10px]">
      <div className="flex justify-start">
        <SearchInput />
      </div>
      <div className="flex items-center">
        <RingSVGIcon />
        <MoonSVGIcon />
        <InfoSVGIcon />
      </div>
      <div className="flex justify-end">
        <DefaultAvatar size="md" />
      </div>
    </div>
  );
};

export default SearchBar;
