import React, { useState } from 'react';
import useUpdateTitle from "../../../api/video/useUpdateTitle";
import { useAppSelector } from "../../../redux/hooks";
import { converToDateTime } from "../../../utils";
import { CircleSpinner } from "../../common";
import { IUpdateTitle, TitleEditProps } from '../../../constant/interfaces';

const TitleEdit: React.FC<TitleEditProps> = ({ setIsTitleEdit }) => {
  const media = useAppSelector(state => state.mediaReducer.media);
  const [title, setTitle] = useState(media?.title || ''); // Initialize the local state with the current title
  const { mutate, isLoading } = useUpdateTitle();

  if (isLoading) {
    return <CircleSpinner />
  }

  const handleSave = () => {
    setIsTitleEdit(false);
    const formData:IUpdateTitle = {
      title: title,
      url: media?.url,
    };
    mutate(formData);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); // Update local state on change
  }

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
            value={title} // Use local state for input value
            onChange={handleChange} // Handle changes to the input
            className="p-4 w-full border border-solid border-white border-opacity-15 rounded-xl bg-black text-white text-sm font-normal leading-[125%] tracking-[-0.0175rem] placeholder:text-white"
            placeholder="Enter video title here"
          />
          <p className="text-white text-opacity-60 text-xs font-normal leading-[125%]">
            You can change the title of the video later.
          </p>
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="py-1 px-3 bg-white text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-xl h-10 w-full lg:w-auto" // Adjusted the width for responsiveness
        >
          Save
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white text-xs font-normal leading-[125%]">
          {converToDateTime(media?.url)}
        </p>
        <p className="text-white text-opacity-50 text-xs font-normal leading-[125%]">
          {media?.size}
        </p>
      </div>
    </div>
  );
};

export default TitleEdit;
