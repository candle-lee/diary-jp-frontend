import { PasscodeForm } from "../components/pages";
import { useGetAuthProfile } from "../api/auth";

const VerifyUserPage: React.FC = () => {
  useGetAuthProfile();
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <PasscodeForm />
      </div>
    </div>
  );
};

export default VerifyUserPage;
