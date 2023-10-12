import AvatarCard from "../components/main/AvatarCard";
import SearchBar from "../components/main/SearchBar";
import StorageCard from "../components/main/StorageCard";

const MainPage = () => {
  return (
    <div className="bg-[#F4F7FE]">
      <div className="flex justify-end">
        <SearchBar />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-4 xl:col-span-5">
          <AvatarCard />
        </div>
        <div className="col-span-12 sm:col-span-4 md:col-span-6 lg:col-span-5 xl:col-span-3">
          <StorageCard />
        </div>
        <div className="col-span-12 sm:col-span-4 md:col-span-3 lg:col-span-3 xl:col-span-4">
          <AvatarCard />
        </div>
        {/* <StorageCard /> */}
      </div>
    </div>
  );
};

export default MainPage;
