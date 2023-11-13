import { Button } from "flowbite-react";
import React, { useCallback, useEffect, useState } from "react";
import {
  useRecordWebcam,
} from "react-record-webcam";

const VideoRecording: React.FC = () => {
  const [recorder, setRecorder] = useState(undefined);
  const [starting, setStartind] = useState(false);
  const [pausing, setPausing] = useState(false);
  const [stoping, setStoping] = useState(false);
  const {
    activeRecordings,
    createRecording,
    openCamera,
    closeCamera,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    download,
  } = useRecordWebcam();
  const initialRecording = async () => {
    const recording = await createRecording();
    if (!recording) return;
    setRecorder(recording);
    await openCamera(recording.id);
  }
  useEffect(() => {
    initialRecording();
  }, []);

  const handlePauseResumeClick = useCallback(() => {
    setPausing((prevPausing) => !prevPausing);
  }, []);

  const handleStopClick = useCallback(() => {
    setStartind(false);
    setStoping(true);
  }, []);

  const handleSaveClick = useCallback(() => {
    console.log("Save clicked");
  }, []);

  const handleNewClick = useCallback(() => {
    console.log("New clicked");
    setStoping(false);
    setStartind(false);
  }, []);

  const handleStartCaptureClick = useCallback(() => {
    setStartind(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full">
        {activeRecordings.map(recording => (
          <div key={recording.id}>
            <video className="w-full"  style={{ maxHeight: "90VH" }} ref={recording.webcamRef} autoPlay muted />
          </div>
        ))}
      </div>
      <div className="mt-4">
        {!starting && !stoping && (
          <Button
            onClick={async ()=>{
              handleStartCaptureClick();
              await startRecording(recorder.id);
              await new Promise((resolve) => setTimeout(resolve, 3000));
            }}
            className="w-full bg-green-500 text-white py-2 px-4 rounded"
          >
            Start
          </Button>
        )}
        {starting && (
          <div className="flex">
            <Button
              onClick={async () => {
                handlePauseResumeClick();
                pausing ? await resumeRecording(recorder.id) : await pauseRecording(recorder.id);
              }}
              className="bg-yellow-500 text-white py-2 px-4 rounded"
            >
              {pausing ? "Resume" : "Pause"}
            </Button>
            <Button
              onClick={async () => {
                handleStopClick();
                await stopRecording(recorder.id);
              }}
              className="ml-2 bg-red-500 text-white py-2 px-4 rounded"
            >
              Stop
            </Button>
          </div>
        )}
        {stoping && (
          <div className="flex gap-4">
            <Button
              className="ml-2 bg-red-500 text-white py-2 px-4 rounded"
            >
              Preview/Edit
            </Button>
            <Button
              onClick={async () => {
                handleSaveClick();
                await download(recorder.id);
              }}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Save
            </Button>
            <Button
              onClick={handleNewClick}
              className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded"
            >
              New
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecording;