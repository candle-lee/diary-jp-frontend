import React, { useState } from "react";
import RecordingCounter from "./RecordingCounter";
import StartRecordingIcon from "../../icons/StartRecordingIcon";
import InRecordingIcon from "../../icons/InRecordingIcon";
import CrossIcon from "../../icons/CrossIcon";

const VideoRecording: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        {isRecording ? (
          <div className="absolute inset-x-0 top-4 flex justify-center">
            <RecordingCounter />
          </div>
        ) : (
          <div className="absolute right-[0.63rem] top-[0.63rem] cursor-pointer lg:right-4 lg:top-4">
            <CrossIcon />
          </div>
        )}
      </div>
      <div className="flex justify-center items-end mt-auto py-6">
        <button type="button" onClick={startRecording}>
          {isRecording ? <StartRecordingIcon /> : <InRecordingIcon />}
        </button>
      </div>
    </div>
  );
};

export default VideoRecording;
