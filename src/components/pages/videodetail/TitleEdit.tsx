interface TitleEditProps {
  setIsTitleEdit: (value: boolean) => void;
}

const TitleEdit: React.FC<TitleEditProps> = ({ setIsTitleEdit }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex lg:flex-row flex-col gap-6 items-center justify-between">
        <div className="flex flex-col gap-2 w-full">
          <p className="text-white text-xs font-normal leading-[100%]">
            Title <span className="text-[#ED2B2B]">*</span>
          </p>
          <input
            type="text"
            name="title"
            id="title"
            className="p-4 w-full  lgborder border-solid border-white border-opacity-15 rounded-xl bg-black text-white text-sm font-normal leading-[125%] tracking-[-0.0175rem] placeholder:text-white"
            placeholder="Kota’s video jornal"
          />
          <p className="text-white text-opacity-60 text-xs font-normal leading-[125%]">
            You can change the title of the video later.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsTitleEdit(false)}
          className="py-1 px-3 bg-white text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-xl h-10 w-full lg:w-[3.375rem]"
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-xs font-normal leading-[125%]">
          Jan 1st, 2024
        </p>
        <p className="text-white text-opacity-50 text-xs font-normal leading-[125%]">
          504MB
        </p>
      </div>
    </div>
  );
};

export default TitleEdit;
