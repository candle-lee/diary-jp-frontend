const TrashBinSVGIcon: React.FC = () => {
  return (
    <div className="w-8 h-8 hover:bg-gray-100 flex justify-center items-center rounded-md cursor-pointer">
      <svg
        className="w-[14px] h-[14px] text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 20"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
        />
      </svg>
    </div>
  );
};

export default TrashBinSVGIcon;
