import StorageProgressBar from "./StorageProgressBar";

const StorageCard = () => {
  return (
    <div className="w-full h-[365px] bg-[#FFF] rounded-[20px] pt-[44px] px-5">
      <div className="flex justify-center mb-[14px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="50" fill="#F4F7FE" />

          <svg
            x="25"
            y="25"
            width="50"
            height="50"
            viewBox="0 0 46 46"
            fill="#4318FF"
          >
            <g clipPath="url(#clip0_101_9116)">
              <path d="M37.0875 19.2434C35.7842 12.6309 29.9767 7.66669 23 7.66669C17.4608 7.66669 12.65 10.81 10.2542 15.41C4.485 16.0234 0 20.9109 0 26.8334C0 33.1775 5.15583 38.3334 11.5 38.3334H36.4167C41.7067 38.3334 46 34.04 46 28.75C46 23.69 42.0708 19.5884 37.0875 19.2434ZM36.4167 34.5H11.5C7.26417 34.5 3.83333 31.0692 3.83333 26.8334C3.83333 22.9042 6.76583 19.6267 10.6567 19.2242L12.7075 19.0134L13.6658 17.1925C15.4867 13.685 19.0517 11.5 23 11.5C28.0217 11.5 32.3533 15.065 33.3308 19.9909L33.9058 22.8659L36.8383 23.0767C39.8283 23.2684 42.1667 25.7792 42.1667 28.75C42.1667 31.9125 39.5792 34.5 36.4167 34.5ZM19.1667 27.1784L15.1608 23.1725L12.4583 25.875L19.1667 32.5834L30.6858 21.0642L27.9833 18.3617L19.1667 27.1784Z" />
            </g>
            <defs>
              <clipPath id="clip0_101_9116">
                <rect width="46" height="46" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </svg>
      </div>
      <div className="flex justify-center">
        <p className=" text-[#2B3674] font-bold text-2xl leading-8 tracking-tight">
          Your storage
        </p>
      </div>
      <div className="w-[200px] mx-auto">
        <p className="flex justify-center text-[#A3AED0] text-base font-normal leading-7">
          Supervise your drive space
        </p>
        <p className="flex justify-center text-[#A3AED0] text-base font-normal leading-7">
          in the easiest way
        </p>
      </div>
      <div className="mt-[50px]">
        <StorageProgressBar />
      </div>
    </div>
  );
};

export default StorageCard;
