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
    <div className="flex flex-col pt-4 px-10 h-screen bg-slate-800">
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
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-full">
          <div className="flex justify-center gap-4">
            <Button
              onClick={recordWebcam.start}
              className="h-[40px] text-white bg-green-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Start
            </Button>
            <Button
              onClick={async () => {
                navigate("/main");
                recordWebcam.close();
              }}
              className="h-[40px] text-white bg-red-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Back
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            {/* <Button
              onClick={async () => {
                pausing
                  ? await resumeRecording(recorder!.id)
                  : await pauseRecording(recorder!.id);
              }}
              className="h-[40px] text-white bg-yellow-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              {pausing ? "Resume" : "Pause"}
            </Button> */}
            <Button
              onClick={recordWebcam.stop}
              className="h-[40px] text-white bg-red-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Stop
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button
              onClick={getRecordingFileHooks}
              className="h-[40px] text-white bg-blue-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Save
            </Button>
            <Button
              onClick={recordWebcam.retake}
              className="h-[40px] text-white bg-indigo-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              New
            </Button>
          </div>
          {/* {stoping && (
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  setPreview(true);
                  setStoping(false);
                  setStarting(false);
                }}
                className="h-[40px] text-white bg-red-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                Preview/Edit
              </Button>
              <Button
                onClick={async () => {
                  handleSaveClick();
                  await download(recorder!.id);
                }}
                className="h-[40px] text-white bg-blue-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                Save
              </Button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default VideoRecording;
