import PasscodeForm from "../components/passcode/PasscodeForm";
import ImageSection from "../layout/ImageSection";

const VerifyUserPage = () => {
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
