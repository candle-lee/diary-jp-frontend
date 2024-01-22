import React, { useState } from "react";
import RecordingCounter from "./RecordingCounter";
import StartRecordingIcon from "../../icons/StartRecordingIcon";
import InRecordingIcon from "../../icons/InRecordingIcon";
import CrossIcon from "../../icons/CrossIcon";

const VideoRecording: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const startRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="relative">
          {isRecording ? (
            <div className="absolute inset-x-0 top-4 flex justify-center">
              <RecordingCounter />
            </div>
          ) : (
            <div
              className="absolute right-[0.63rem] top-[0.63rem] cursor-pointer lg:right-4 lg:top-4"
              onClick={toggleDialog}
            >
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
      {isDialogOpen && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="bg-black bg-opacity-80 border border-solid border-white border-opacity-25 rounded-lg p-4 flex flex-col gap-4 max-w-60">
            <div className="text-white text-opacity-60 text-sm font-normal leading-[125%] tracking-[-0.0175rem]">
              Are you really want to finish the recording?
            </div>
            <div className="flex gap-4 justify-between">
              <button
                type="button"
                className="border border-solid border-white py-1 px-3 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-2xl"
                onClick={() => setIsDialogOpen(false)}
              >
                Back to recording
              </button>
              <button
                type="button"
                className="border border-solid border-white py-1 px-3 bg-white text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-2xl"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoRecording;
