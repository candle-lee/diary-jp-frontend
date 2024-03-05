import { ResetPasswordForm } from "../components/pages";

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
