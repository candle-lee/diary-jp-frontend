import {
  AvatarCard,
  Recommend,
  SearchBar,
  StorageCard,
  VideoHistory,
  VideoUploadCard,
  WeeklyEvents,
} from "../components/pages";

const MainPage: React.FC = () => {
  return (
    <div className="bg-[#F4F7FE]">
      <div className="flex justify-end py-5">
        <SearchBar />
      </div>
      <div className="grid grid-cols-12 gap-5 mb-5">
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
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-4">
          <VideoHistory />
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-6 xl:col-span-5">
          <WeeklyEvents />
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-3">
          <Recommend />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
