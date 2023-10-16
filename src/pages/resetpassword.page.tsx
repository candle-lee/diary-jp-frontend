import ResetPasswordForm from "../components/resetpassword/ResetPasswrodForm";
import ImageSection from "../layout/ImageSection";

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
