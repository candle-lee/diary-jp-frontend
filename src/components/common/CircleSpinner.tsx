import { Spinner } from "flowbite-react";

const CircleSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  );
};

export default CircleSpinner;
