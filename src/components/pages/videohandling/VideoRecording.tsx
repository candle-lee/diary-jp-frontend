import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import {
  useRecordWebcam,
  CAMERA_STATUS,
  RecordWebcamOptions,
} from "react-record-webcam";
import { useNavigate } from "react-router-dom";
import { useVideoUpload } from "../../../api/video";
import { CircleSpinner } from "../../common";

const VideoRecording: React.FC = () => {
  const VideoOptions: RecordWebcamOptions = {
    filename: "test-filename",
    fileType: "mp4",
    width: 1280,
    height: 720,
  };
  const navigate = useNavigate();
  const recordWebcam = useRecordWebcam(VideoOptions);
  const { mutate, isLoading } = useVideoUpload();

  useEffect(() => {
    recordWebcam.open();
  }, []);

  const getRecordingFileHooks = async () => {
    const blob = await recordWebcam.getRecording();
    mutate(blob);
  };

  if (isLoading) {
    return <CircleSpinner />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="w-full">
        <div className="flex justify-center">
          <video
            className="aspect-video object-cover"
            style={{
              display: `${
                recordWebcam.status === CAMERA_STATUS.OPEN ||
                recordWebcam.status === CAMERA_STATUS.RECORDING
                  ? "block"
                  : "none"
              }`,
            }}
            ref={recordWebcam.webcamRef}
            autoPlay
            muted
          />
          <video
            className="aspect-video object-cover"
            style={{
              display: `${
                recordWebcam.status === CAMERA_STATUS.PREVIEW ? "block" : "none"
              }`,
            }}
            ref={recordWebcam.previewRef}
            controls
          />
        </div>
        {recordWebcam.status === CAMERA_STATUS.RECORDING && (
          <div className="absolute top-3 left-2 flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white">Recording...</span>
          </div>
        )}
      </div>
      <div className="flex justify-center items-end mt-auto py-6">
        <div className="w-full">
          <div className="flex justify-center gap-4">
            <button type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <circle cx="32" cy="32" r="28" fill="white" />
                <circle
                  cx="32"
                  cy="32"
                  r="31"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoRecording;
