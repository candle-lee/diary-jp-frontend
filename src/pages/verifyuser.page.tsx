import { PasscodeForm } from "../components/pages";
import { ImageSection } from "../components/common";
import { useGetAuthProfile } from "../api/auth";

const VerifyUserPage: React.FC = () => {
  useGetAuthProfile();
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <PasscodeForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default VerifyUserPage;
