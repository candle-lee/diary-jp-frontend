import { BackToDashboard } from "../components/common";
import ResetPassPasscodeForm from "../components/pages/resetpasspasscode/ResetPassPasscodeForm";

const ResetPasscodePage = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[308px] mt-[40px]">
        <div className="flex items-center">
          <BackToDashboard />
        </div>
        <div className="mt-[100px]">
          <ResetPassPasscodeForm />
        </div>
      </div>
    </div>
  );
};

export default ResetPasscodePage;
