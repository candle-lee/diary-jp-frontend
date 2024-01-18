import VideoPlayIcon from "../icons/VideoPlayIcon";

const VideoPlayer: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <video className="h-full w-full rounded-lg border border-solid border-white border-opacity-15">
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex justify-between gap-[0.62rem] w-full items-center">
        <div>
          <VideoPlayIcon />
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="12"
            viewBox="0 0 158 12"
            fill="none"
          >
            <path
              d="M1.5 6L156.5 6"
              stroke="white"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              cx="23.5574"
              cy="6"
              r="5"
              transform="rotate(-90 23.5574 6)"
              fill="white"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </div>
        <div className="flex gap-1 text-white text-xs leading-[125%] tracking-[-0.015rem]">
          <div className="flex gap-[0.12rem]">
            <p>00</p>
            <p>:</p>
            <p>01</p>
            <p>:</p>
            <p>02</p>
          </div>
          <div>/</div>
          <div className="flex gap-[0.12rem]">
            <p>00</p>
            <p>:</p>
            <p>05</p>
            <p>:</p>
            <p>13</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
