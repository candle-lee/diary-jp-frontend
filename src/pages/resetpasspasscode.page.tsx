import BackToDashboard from "../components/common/BackToDashboard";
import ResetPassPasscodeForm from "../components/resetpasspasscode/ResetPassPasscodeForm";

const ResetPassPasscodePage = () => {
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

export default ResetPassPasscodePage;
