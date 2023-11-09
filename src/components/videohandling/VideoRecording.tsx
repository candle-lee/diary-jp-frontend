import React, { useCallback, useState } from "react";
import VideoRecorder from "react-video-recorder";

const VideoRecording: React.FC = () => {
  const [recording, setRecording] = useState(false);
  const [pausing, setPausing] = useState(false);
  const [stoping, setStoping] = useState(false);

  const handlePauseResumeClick = useCallback(() => {
    setPausing((prevPausing) => !prevPausing);
  }, []);

  const handleStopClick = useCallback(() => {
    setRecording(false);
    setStoping(true);
  }, []);

  const handleSaveClick = useCallback(() => {
    console.log("Save clicked");
  }, []);

  const handleNewClick = useCallback(() => {
    console.log("New clicked");
    setStoping(false);
    setRecording(false);
  }, []);

  const handleStartCaptureClick = useCallback(() => {
    setRecording(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full px-20" style={{ maxHeight: "90VH" }}></div>
      <VideoRecorder
        onRecordingComplete={(videoBlob) => {
          // Do something with the video...
          console.log("videoBlob", videoBlob);
        }}
      />
      <div className="mt-4">
        {!recording && !stoping && (
          <button
            onClick={handleStartCaptureClick}
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Start
          </button>
        )}
        {recording && (
          <>
            <button
              onClick={handlePauseResumeClick}
              className="bg-yellow-500 text-white py-2 px-4 rounded"
            >
              {pausing ? "Resume" : "Pause"}
            </button>
            <button
              onClick={handleStopClick}
              className="ml-2 bg-red-500 text-white py-2 px-4 rounded"
            >
              Stop
            </button>
          </>
        )}
      </div>
      {stoping && (
        <div className="mt-4">
          <button
            onClick={handleSaveClick}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
          <button
            onClick={handleNewClick}
            className="ml-2 bg-indigo-500 text-white py-2 px-4 rounded"
          >
            New
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoRecording;
