import AvatarCard from "../components/main/AvatarCard";
import SearchBar from "../components/main/SearchBar";

const MainPage = () => {
  return (
    <div className="bg-[#F4F7FE]">
      <div className="flex justify-end">
        <SearchBar />
      </div>
      <div className="flex">
        <AvatarCard />
      </div>
    </div>
  );
};

export default MainPage;
