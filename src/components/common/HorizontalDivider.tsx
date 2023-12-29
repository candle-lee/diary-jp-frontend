const HorizontalDivider: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="h-0.5 w-full bg-[#E0E5F2] dark:bg-gray-700"></div>
      <span className="px-4 text-center text-[#A3AED0] text-sm font-medium leading-6 tracking-[-0.0175rem] dark:text-gray-400">
        or
      </span>
      <div className="h-0.5 w-full bg-[#E0E5F2] dark:bg-gray-700"></div>
    </div>
  );
};

export default HorizontalDivider;
