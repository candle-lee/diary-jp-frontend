import React, { useEffect, useState } from "react";
import RecordingCounter from "./RecordingCounter";
import InRecordingIcon from "../../icons/InRecordingIcon";
import StartRecordingIcon from "../../icons/StartRecordingIcon";
import CrossIcon from "../../icons/CrossIcon";
import { useNavigate } from "react-router-dom";
import { useRecordWebcam } from "react-record-webcam";
import { useVideoUpload } from "../../../api/video";
import { CircleSpinner } from "../../common";
// import { CaptionIcon } from "../../icons";
// import CaptionContainer from "./CaptionContainer";

const VideoRecording: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [captionShow, setCaptionShow] = useState(false);
  const { activeRecordings, createRecording, openCamera, closeCamera, startRecording, stopRecording, pauseRecording, resumeRecording } = useRecordWebcam();
  const navigate = useNavigate();

  useEffect(() => {
    openWebCam();
  }, []);

  const openWebCam = async () => {
    const recording = await createRecording();
    if (recording) await openCamera(recording.id);
  };

  const { mutate, isLoading } = useVideoUpload();

  if (isLoading) {
    return <CircleSpinner />
  }

  const getRecordingFileHooks = async () => {
    try {
      const recorded = await stopRecording(activeRecordings[0].id);
      const formData = new FormData();
      formData.append('file', recorded?.blobChunks[0] as Blob, Date.now().toString());
      mutate(formData);
      closeCamera(activeRecordings[0].id);
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
      startRecording(activeRecordings[0].id);
    }
    setIsRecording(!isRecording);
    resumeRecording(activeRecordings[0].id);
  };

  const handleRecordingPause = () => {
    setIsRecording(!isRecording);
    pauseRecording(activeRecordings[0].id);
  };

  return (
    <>
        {activeRecordings.map((recording) => (
      <div className="flex flex-col h-full" key={recording.id}>
            <div className="relative h-full">
              <video className="aspect-video object-cover h-full mx-auto" ref={recording.webcamRef} autoPlay muted />
              {isStarted && (
                <div className="absolute inset-x-0 top-4 flex justify-center">
                  <RecordingCounter isStopped={isStarted && !isRecording} />
                </div>
              )}
              {!isRecording &&
                (
                  <div
                    className="absolute right-[0.63rem] top-[0.63rem] cursor-pointer lg:right-4 lg:top-4"
                    onClick={toggleDialog}
                  >
                    <CrossIcon />
                  </div>
                )
              }
            </div>
          {/* {captionShow && (
            <div className="relative lg:left-[56rem] lg:w-[20rem]">
              <CaptionContainer />
              <CaptionContainer />
            </div>
          )} */}
            <div className="mt-auto flex justify-between items-center">
              <div className="flex justify-center items-end py-6" style={{ flex: 2 }}>
                {isRecording ? (
                  <button className="z-50" onClick={() => handleRecordingPause()}>
                    <InRecordingIcon />
                  </button>
                ) : (
                  <button className="z-50" onClick={() => handleRecordingStart()}>
                    <StartRecordingIcon />
                  </button>
                )}
                {/* <div className="cursor-pointer absolute right-28 lg:right-[32rem]" onClick={() => setCaptionShow(!captionShow)}>
                <CaptionIcon />
              </div> */}
              </div>
              {isStarted && !isRecording && (
                <div className="absolute right-[1.31rem]">
                  <button
                    type="button"
                    onClick={() => getRecordingFileHooks()}
                    className="bg-[#FFF] rounded-2xl py-1 px-3 text-black text-sm font-normal leading-[125%] tracking-[-0.0175rem]"
                  >
                    Upload
                  </button>
                </div>
              )}
            </div>
      </div>
        ))}
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
                onClick={() => {
                  navigate('/video-list');
                  closeCamera(activeRecordings[0].id);
                }}
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
