import { BackToDashboard } from "../components/common";
import { SignInForm } from "../components/pages";

const SignInPage: React.FC = () => {
  return (
    <div className="bg-[#FFF] dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md px-4">
        <div className="mb-6">
          <BackToDashboard />
        </div>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
