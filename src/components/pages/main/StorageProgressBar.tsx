interface StorageProgressBarProps {
  totalSize: number;
}

const StorageProgressBar: React.FC<StorageProgressBarProps> = ({
  totalSize,
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1">
        <span className="text-[#A3AED0] text-sm font-medium leading-6 tracking-tighter">
          {((totalSize / 1000000) * 100).toFixed(2)} Mb
        </span>
        <span className="text-[#A3AED0] text-sm font-medium leading-6 tracking-tighter">
          5 Gb
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{
            width:
              ((totalSize / 1000000 / 1000) * 100 * 100).toFixed(2).toString() +
              "%",
          }}
        ></div>
      </div>
    </div>
  );
};
export default StorageProgressBar;
