import { PasscodeForm } from "../components/pages";
import { ImageSection } from "../components/common";

const VerifyUserPage: React.FC = () => {
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
