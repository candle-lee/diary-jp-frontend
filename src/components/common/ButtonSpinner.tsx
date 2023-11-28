import { Button, Spinner } from "flowbite-react";

const ButtonSpinner: React.FC = () => {
  return (
    <>
      <Button className="w-full h-[54px] text-white bg-[#4318FF] font-medium rounded-2xl text-sm px-2.5 py-2 text-center">
        <Spinner aria-label="Spinner button example" size="sm" />
        <span className="pl-3">Loading...</span>
      </Button>
    </>
  );
};

export default ButtonSpinner;
