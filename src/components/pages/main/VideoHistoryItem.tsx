// import ArrowDownloadSVGIcon from "../../assets/icons/ArrowDownloadSVGIcon";
import { VideoPlaySVGIcon, TrashBinSVGIcon } from "../../icons";
import { useFetchVideo } from "../../../api/video";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { CircleSpinner } from "../../common";
// import { useVideoDownload } from "../../api/video";

interface IVideoHistoryItem {
  title: string;
  url: string;
}

const VideoHistoryItem: React.FC<IVideoHistoryItem> = ({
  url,
}: IVideoHistoryItem) => {
  // Use your custom hook
  const [mediaId, setMediaId] = useState<string>("");
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
  const { data: videoData, isError, isLoading } = useFetchVideo(mediaId);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePlayClick = () => {
    openModal();
    setMediaId(url);
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
        <TrashBinSVGIcon />
      </div>
      <Modal
        position={"center"}
        size={"7xl"}
        show={isModalOpen}
        onClose={closeModal}
      >
        <div className="p-2">
          {isLoading && (
            <div className="flex items-center justify-center">
              <CircleSpinner />
            </div>
          )}
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
              <Button className="ml-auto" color="dark" onClick={closeModal}>
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default VideoHistoryItem;
