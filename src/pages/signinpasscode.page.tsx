import { BackToDashboard } from "../components/common";
import { PasscodeForm } from "../components/pages";

const SigninPasscodePage: React.FC = () => {
  return (
    <div className="flex justify-between">
      <div className="ml-[308px] mt-[40px]">
        <div className="flex items-center">
          <BackToDashboard />
        </div>
        <div className="mt-[100px]">
          <PasscodeForm />
        </div>
      </div>
    </div>
  );
};

export default SigninPasscodePage;
