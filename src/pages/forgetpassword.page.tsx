import { ForgetPasswordForm } from "../components/pages";

const ForgetPasswordPage: React.FC = () => {
  return (
    <div className="bg-[#000] flex items-center justify-center h-full">
      <div className="w-full max-w-md px-8 py-12">
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
