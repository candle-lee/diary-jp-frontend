import { ResetPasswordForm } from "../components/pages";

const ResetPasswordPage: React.FC = () => {
  return (
    <div className="bg-[#000] flex items-center justify-center h-full">
      <div className="w-full max-w-md px-8 py-12">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPasswordPage;
