const DropZone = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-[311px] border-2 border-[#E0E5F2] border-dashed rounded-lg cursor-pointer bg-[#FAFCFE] dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
          >
            <g clipPath="url(#clip0_101_9133)">
              <path
                d="M33.3333 53.3333H46.6667C48.5 53.3333 50 51.8333 50 50V33.3333H55.3C58.2667 33.3333 59.7667 29.7333 57.6667 27.6333L42.3667 12.3333C41.0667 11.0333 38.9667 11.0333 37.6667 12.3333L22.3667 27.6333C20.2667 29.7333 21.7333 33.3333 24.7 33.3333H30V50C30 51.8333 31.5 53.3333 33.3333 53.3333ZM20 60H60C61.8333 60 63.3333 61.5 63.3333 63.3333C63.3333 65.1667 61.8333 66.6667 60 66.6667H20C18.1667 66.6667 16.6667 65.1667 16.6667 63.3333C16.6667 61.5 18.1667 60 20 60Z"
                fill="#4318FF"
              />
            </g>
            <defs>
              <clipPath id="clip0_101_9133">
                <rect width="80" height="80" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="mb-2 text-xl font-bold leading-8 tracking-tight text-[#4318FF] mx-14">
            Record Your Vlog
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  );
};

export default DropZone;
