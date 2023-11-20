import { ForgetPasswordForm } from "../components/pages";
import { ImageSection } from "../components/common";

const ForgetPasswordPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <ForgetPasswordForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
