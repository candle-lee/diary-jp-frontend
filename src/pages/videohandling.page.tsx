import { useGetAuthProfile } from "../api/auth";
import { VideoRecording } from "../components/pages";

const VideoHandlingPage: React.FC = () => {
  useGetAuthProfile();
  return (
    <div className="bg-[#000] justify-center h-full">
      <VideoRecording />
    </div>
  );
};

export default VideoHandlingPage;
