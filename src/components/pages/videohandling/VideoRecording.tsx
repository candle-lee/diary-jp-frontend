import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { useVideoUpload } from "../../../api/video";
import { CircleSpinner } from "../../common";
import { CaptionHideIcon, CaptionShowIcon, CrossIcon, InRecordingIcon, StartRecordingIcon } from "../../icons";

import CaptionList from "./CaptionList";
import RecordingCounter from "./RecordingCounter";
import { LiveTranscriptionEvents } from "./constant.ts";

const VideoRecording: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useVideoUpload();
  const webcamRef = useRef<any | null>(null);
  const captionListRef = useRef<any | null>(null);

  const [isStarted, setIsStarted] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [captionShow, setCaptionShow] = useState(false);

  const [audioRecorder, setAudioRecorder] = useState<any>(null);
  const [videoRecorder, setVideoRecorder] = useState<any>(null);

  const [recordedChunks, setRecordedChunks] = useState<any>([]);

  const onAudioDataAvailable = (event: any) => {
    if (event.data.size > 0 && window.socket) {
      window.socket.emit("message", event.data);
    }
  };

  const onVideoDataAvailable = ({ data }: any) => {
    if (data.size > 0) {
      setRecordedChunks((prev: any) => prev.concat(data));
    }
  }

  const openMediaDevices = async () => {
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    if (audioStream) {
      const audioRecorder = new MediaRecorder(audioStream, { mimeType: "audio/webm" });
      audioRecorder.ondataavailable = onAudioDataAvailable;
      setAudioRecorder(audioRecorder);
    }

    const videoStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    if (videoStream) {
      webcamRef.current.srcObject = videoStream;
      const videoRecorder = new MediaRecorder(videoStream, { mimeType: "video/webm" });
      videoRecorder.ondataavailable = onVideoDataAvailable;
      setVideoRecorder(videoRecorder);
    }
  }

  useEffect(() => {
    openMediaDevices();
  }, []);

  const toggleDialog = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handleStartCaptureClick = async () => {
    if (webcamRef && webcamRef.current.srcObject) {
      setIsStarted(true);
      setIsRecording(true);
      await audioRecorder.start(1000);
      await videoRecorder.start();
    } else {
      toast.error(`Error: Webcam is not connected.`, {
        hideProgressBar: true,
        autoClose: 10000,
        type: "error",
        position: "top-right",
        className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur",
      });
    }
  };

  const handleStopCaptureClick = async () => {
    await audioRecorder.stop();
    await videoRecorder.stop();
    setIsRecording(false);
  };

  const getRecordingFileHooks = async () => {
    try {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, { type: 'video/webm' });
        const formData = new FormData();
        formData.append('file', blob, Date.now().toString());
        formData.append('caption', captionListRef.current.getCaption());
        mutate(formData);
      }
    } catch (error) {
      console.error("Error getting recording:", error);
    }
  };

  const onTranscriptReceive = (data: any) => {
    console.log(data);
    captionListRef.current.appendCaption(data.channel.alternatives[0].transcript, data.speech_final);
  }

  const unregisterSocketEvent = () => {
    if (window.socket) {
      window.socket.removeListener(LiveTranscriptionEvents.Transcript);
      window.socket.removeListener(LiveTranscriptionEvents.UtteranceEnd);
    }
  }

  const registerSocketEvent = () => {
    unregisterSocketEvent();
    if (window.socket) {
      window.socket.on(LiveTranscriptionEvents.Transcript, data => onTranscriptReceive(data));
      window.socket.on(LiveTranscriptionEvents.UtteranceEnd, data => console.log(data))
    }
  }

  useEffect(() => {
    registerSocketEvent();
  }, [window.socket]);

  if (isLoading) {
    return <CircleSpinner />
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="relative h-full">
          <video
            className="aspect-video object-cover h-full mx-auto"
            ref={webcamRef}
            autoPlay
            playsInline
          />
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
        <CaptionList ref={captionListRef} captionShow={captionShow} />
        <div className="mt-auto flex justify-between items-center">
          <div className="flex justify-center items-center py-6 gap-6 relative" style={{ flex: 2 }}>
            {isRecording ? (
              <button className="z-50" onClick={() => handleStopCaptureClick()}>
                <InRecordingIcon />
              </button>
            ) : (
              <button className="z-50" onClick={() => handleStartCaptureClick()}>
                <StartRecordingIcon />
              </button>
            )}
            <div className="cursor-pointer absolute right-28 lg:right-[32rem]" onClick={() => setCaptionShow(!captionShow)}>
              {
                captionShow ? <CaptionShowIcon /> : <CaptionHideIcon />
              }
            </div>
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