// import ArrowDownloadSVGIcon from "../../assets/icons/ArrowDownloadSVGIcon";
import { VideoPlaySVGIcon, TrashBinSVGIcon } from "../../icons";
import { useFetchVideo } from "../../../api/video";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { CircleSpinner } from "../../common";
import useVideoDelete from "../../../api/video/useVideoDelete";
// import { useVideoDownload } from "../../api/video";

interface IVideoHistoryItem {
  title: string;
  url: string;
}

const VideoHistoryItem: React.FC<IVideoHistoryItem> = ({
  url,
}: IVideoHistoryItem) => {
  const [mediaId, setMediaId] = useState<string>("");
  const [removeMediaId, setRemoveMediaId] = useState<string>("");
  const { mutate, isLoading } = useVideoDelete();
  // const { data, error, isLoading } = useVideoDownload(mediaId);
  // if (data) {
  //   const url = window.URL.createObjectURL(data);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = mediaId || "video.mp4";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   window.URL.revokeObjectURL(url);
  // }
  // const handleDownloadClick = () => {
  //   setMediaId(url);
  // };
  const { data: videoData, isError } = useFetchVideo(mediaId);

  const [isPlayModalOpen, setIsPlayModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  console.log(isLoading);
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <CircleSpinner />
      </div>
    );
  }
  const openPlayModal = () => {
    setIsPlayModalOpen(true);
  };

  const openTrashModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closePlayModal = () => {
    setIsPlayModalOpen(false);
  };

  const closeTrashModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handlePlayClick = () => {
    openPlayModal();
    setMediaId(url);
  };

  const handleTrashClick = () => {
    openTrashModal();
    setRemoveMediaId(url);
  };

  return (
    <div className="h-[120px] rounded-2xl bg-[#FFF] shadow-[0_18px_40px_0px_rgba(0,0,0,0.3)] p-4 flex items-center gap-5">
      <img
        className="rounded-lg"
        src="/src/assets/img/video-item.png"
        alt="video_item"
      />
      <div className="">
        {/* <p className="text-[#2B3674] font-medium text-base leading-4 tracking-[-0.32px] mb-2">
          {title}
        </p> */}
        <p className="text-[#A3AED0] font-medium text-sm leading-5 tracking-[-0.28px]">
          {" "}
          {url}{" "}
        </p>
      </div>
      <div className="flex gap-6 ml-auto">
        {/* <div onClick={() => handleDownloadClick()}>
          <ArrowDownloadSVGIcon />
        </div> */}
        <div onClick={handlePlayClick}>
          <VideoPlaySVGIcon />
        </div>
        <div onClick={handleTrashClick}>
          <TrashBinSVGIcon />
        </div>
      </div>
      <Modal
        position={"center"}
        size={"7xl"}
        show={isPlayModalOpen}
        onClose={closePlayModal}
      >
        <div className="p-2">
          {isError && <p>Error loading video</p>}
          {videoData && (
            <>
              <video controls className="w-full mb-2" height="800">
                <source
                  src={URL.createObjectURL(
                    new Blob([videoData], { type: "video/mp4" })
                  )}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <Button className="ml-auto" color="dark" onClick={closePlayModal}>
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
      <Modal
        position={"center"}
        show={isConfirmModalOpen}
        onClose={closeTrashModal}
        className="p-0"
      >
        <div className="flex justify-center">
          <div className="relative w-full h-full md:h-auto">
            <div className="relative text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
              <button
                type="button"
                onClick={() => setIsConfirmModalOpen(false)}
                className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <svg
                className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p className="mb-4 text-gray-500 dark:text-gray-300">
                Are you sure you want to delete this item?
              </p>
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={() => setIsConfirmModalOpen(false)}
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
                <button
                  type="button"
                  onClick={async () => {
                    await mutate(removeMediaId);
                    setIsConfirmModalOpen(false);
                  }}
                  className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
                >
                  Yes, I'm sure
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default VideoHistoryItem;
