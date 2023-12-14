import { useVideoUpload } from "../../../api/video";
import { UploadSVGIcon } from "../../icons";
import { CircleSpinner } from "../../common";

const DropZone: React.FC = () => {
  const { mutate, isLoading } = useVideoUpload();
  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("mediaId", file.name);
      mutate(formData);
    }
  };
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <CircleSpinner />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-[100px] border-2 border-[#E0E5F2] border-dashed rounded-lg cursor-pointer bg-[#FAFCFE] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center pt-5 pb-6">
          <UploadSVGIcon />
          <p className="mb-2 text-xl font-bold leading-8 tracking-tight text-[#4318FF]">
            Record Your Vlog
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default DropZone;
