const StorageProgressBar = () => {
  const progressWidth = "55%"; // Set the width as a variable

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-[#A3AED0] text-sm font-medium leading-6 tracking-tighter">
          25.6 Gb
        </span>
        <span className="text-[#A3AED0] text-sm font-medium leading-6 tracking-tighter">
          50 Gb
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: progressWidth }}
        ></div>
      </div>
    </div>
  );
};
export default StorageProgressBar;
