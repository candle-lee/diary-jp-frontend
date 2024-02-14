import React, { useEffect, useState } from "react";
import RecordingCounter from "./RecordingCounter";
import InRecordingIcon from "../../icons/InRecordingIcon";
import StartRecordingIcon from "../../icons/StartRecordingIcon";
import CrossIcon from "../../icons/CrossIcon";
import { useNavigate } from "react-router-dom";
import { useRecordWebcam, CAMERA_STATUS, FileType } from "react-record-webcam";
import { useVideoUpload } from "../../../api/video";
import { CircleSpinner } from "../../common";

interface IVideoOption {
  filename: string;
  fileType: FileType;
  width: number;
  height: number;
}

const OPTIONS: IVideoOption = {
  filename: "test-filename",
  fileType: "mp4",
  width: 1920,
  height: 1080,
};

const VideoRecording: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const recordWebcam = useRecordWebcam(OPTIONS);
  const navigate = useNavigate();
  useEffect(() => {
    recordWebcam.open();
  }, []);

  const { mutate, isLoading } = useVideoUpload();

  if (isLoading) {
    return <CircleSpinner />;
  }

  const getRecordingFileHooks = async () => {
    try {
      const blob = await recordWebcam.getRecording();
      const formData = new FormData();
      formData.append("file", blob, "recorded_video.mp4");
      mutate(formData);
    } catch (error) {
      console.error("Error getting recording:", error);
    }
  };

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };
  const handleRecordingStart = () => {
    if (!isStarted) {
      setIsStarted(true);
    }
    setIsRecording(!isRecording);
    recordWebcam.start();
  };

  const handleRecordingStop = () => {
    setIsRecording(!isRecording);
    recordWebcam.stop();
  };

  const handleRecordingFinish = () => {
    navigate("/video-list");
    recordWebcam.stop();
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="relative h-full">
          <video
            className="aspect-video object-cover h-full mx-auto"
            ref={recordWebcam.webcamRef}
            style={{
              display: `${
                recordWebcam.status === CAMERA_STATUS.OPEN ||
                recordWebcam.status === CAMERA_STATUS.RECORDING
                  ? "block"
                  : "none"
              }`,
            }}
            autoPlay
            muted
          />
          <video
            className="aspect-video object-cover h-full mx-auto"
            ref={recordWebcam.previewRef}
            style={{
              display: `${
                recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
              }`,
            }}
            controls
          />
          {isStarted && (
            <div className="absolute inset-x-0 top-4 flex justify-center">
              <RecordingCounter isStopped={isStarted && !isRecording} />
            </div>
          )}
          {isRecording ||
            (isStarted && (
              <div
                className="absolute right-[0.63rem] top-[0.63rem] cursor-pointer lg:right-4 lg:top-4"
                onClick={toggleDialog}
              >
                <CrossIcon />
              </div>
            ))}
        </div>
        <div className="mt-auto flex justify-between items-center">
          <div
            className="flex justify-center items-end py-6"
            style={{ flex: 2 }}
          >
            {isRecording ? (
              <button className="z-50" onClick={() => handleRecordingStop()}>
                <InRecordingIcon />
              </button>
            ) : (
              <button className="z-50" onClick={() => handleRecordingStart()}>
                <StartRecordingIcon />
              </button>
            )}
          </div>
          {isStarted && !isRecording && (
            <div className="absolute right-[1.31rem]">
              <button
                type="button"
                onClick={getRecordingFileHooks}
                className="bg-[#FFF] rounded-2xl py-1 px-3 text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem]"
              >
                Done
              </button>
            </div>
          )}
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
                onClick={() => handleRecordingFinish()}
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
