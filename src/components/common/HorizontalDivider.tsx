const HorizontalDivider: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="px-5 text-center text-gray-500 dark:text-gray-400">
        or
      </div>
      <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
    </div>
  );
};

export default HorizontalDivider;
