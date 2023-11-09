// react-video-recorder.d.ts
declare module 'react-video-recorder' {
    export interface VideoRecorderProps {
      onRecordingComplete?: (videoBlob: Blob) => void;
      // ... other props you need to include
    }
    const VideoRecorder: React.ComponentType<VideoRecorderProps>;
    export default VideoRecorder;
  }
  