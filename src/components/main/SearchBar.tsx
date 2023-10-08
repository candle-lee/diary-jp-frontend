import DefaultAvatar from "../common/DefaultAvatar";
import InfoIcon from "./InfoIcon";
import MoonIcon from "./MoonIcon";
import RingIcon from "./RingIcon";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="flex items-center p-[10px] w-[422px] h-[61px] rounded-[30px] bg-[#FFF] shadow-[14px 17px 40px 4px] shadow-[rgba(112, 144, 176, 0.08)] p-[10px]">
      <SearchInput />
      <RingIcon />
      <MoonIcon />
      <InfoIcon />
      <DefaultAvatar size="41px" />
    </div>
  );
};

export default SearchBar;
