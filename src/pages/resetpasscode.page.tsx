import { ResetPassPasscodeForm } from "../components/pages";

const ResetPasscodePage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[308px] mt-[40px]">
        <div className="flex items-center"></div>
        <div className="mt-[100px]">
          <ResetPassPasscodeForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasscodePage;
