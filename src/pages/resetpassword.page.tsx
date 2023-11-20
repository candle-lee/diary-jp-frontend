import { ResetPasswordForm } from "../components/pages";
import { ImageSection } from "../components/common";

const ResetPasswordPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <ResetPasswordForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
