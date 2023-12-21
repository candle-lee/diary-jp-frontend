import { Button } from "flowbite-react";
import React, { useCallback, useEffect, useState } from "react";
import { useRecordWebcam } from "react-record-webcam";
import { useNavigate } from "react-router-dom";
import { IRecorder } from "../../../constant/interfaces";

const VideoRecording: React.FC = () => {
  const [recorder, setRecorder] = useState<IRecorder>();
  const [starting, setStarting] = useState(false);
  const [pausing, setPausing] = useState(false);
  const [stoping, setStoping] = useState(false);
  const [preview, setPreview] = useState(false);

  const {
    createRecording,
    openCamera,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    download,
    closeCamera,
  } = useRecordWebcam();

  const navigate = useNavigate();

  const initialRecording = async () => {
    const recording = await createRecording();
    if (!recording) return;
    setRecorder(recording);
    await openCamera(recording.id);
  };

  useEffect(() => {
    initialRecording();
  }, []);

  const handlePauseResumeClick = useCallback(() => {
    setPausing((prevPausing) => !prevPausing);
  }, []);

  const handleStopClick = useCallback(() => {
    setStarting(false);
    setStoping(true);
  }, []);

  const handleSaveClick = useCallback(() => {
    console.log("Save clicked");
  }, []);

  const handleNewClick = useCallback(() => {
    console.log("New clicked");
    setStoping(false);
    setStarting(false);
    setPreview(false);
    setPausing(false);
  }, []);

  const handleStartCaptureClick = useCallback(() => {
    setStarting(true);
  }, []);

  return (
    <div className="flex flex-col pt-4 px-10 h-screen bg-slate-800">
      <div className="w-full">
        <div className="flex justify-center" key={recorder?.id}>
          <video
            className="aspect-video object-cover"
            style={{
              transform: "scaleX(-1)",
              width: "calc(80% + 2px)",
              display: `${!preview ? "block" : "none"}`,
            }}
            ref={recorder?.webcamRef}
            autoPlay
            muted
          />
          <video
            className="aspect-video object-cover"
            style={{
              width: "calc(80% + 2px)",
              display: `${preview ? "block" : "none"}`,
            }}
            ref={recorder?.previewRef}
            controls
          />
        </div>

        {starting && (
          <div className="absolute top-3 left-2 flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white">Recording...</span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="w-full">
          {!starting && !stoping && !preview && (
            <div className="flex justify-center gap-4">
              <Button
                onClick={async () => {
                  handleStartCaptureClick();
                  await startRecording(recorder!.id);
                  await new Promise((resolve) => setTimeout(resolve, 3000));
                }}
                className="h-[40px] text-white bg-green-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                Start
              </Button>
              <Button
                onClick={async () => {
                  navigate("/main");
                  await new Promise((resolve) => setTimeout(resolve, 3000));
                  await closeCamera(recorder!.id);
                }}
                className="h-[40px] text-white bg-red-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                Back
              </Button>
            </div>
          )}
          {starting && (
            <div className="flex justify-center gap-4">
              <Button
                onClick={async () => {
                  handlePauseResumeClick();
                  pausing
                    ? await resumeRecording(recorder!.id)
                    : await pauseRecording(recorder!.id);
                }}
                className="h-[40px] text-white bg-yellow-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                {pausing ? "Resume" : "Pause"}
              </Button>
              <Button
                onClick={async () => {
                  handleStopClick();
                  await stopRecording(recorder!.id);
                }}
                className="h-[40px] text-white bg-red-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                Stop
              </Button>
            </div>
          )}
          {preview && (
            <div className="flex justify-center gap-4">
              <Button
                onClick={async () => {
                  handleSaveClick();
                  await download(recorder!.id);
                }}
                className="h-[40px] text-white bg-blue-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                Save
              </Button>
              <Button
                onClick={handleNewClick}
                className="h-[40px] text-white bg-indigo-500 font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
              >
                New
              </Button>
            </div>
          )}
          {stoping && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoRecording;
