import AvatarCard from "../components/main/AvatarCard";
import SearchBar from "../components/main/SearchBar";
import StorageCard from "../components/main/StorageCard";
import VideoUploadCard from "../components/main/VideoUploadCard";

const MainPage = () => {
  return (
    <div className="bg-[#F4F7FE]">
      <div className="flex justify-end py-5">
        <SearchBar />
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4">
          <AvatarCard />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-3">
          <StorageCard />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-5">
          <VideoUploadCard />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
