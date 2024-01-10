import { SignInForm } from "../components/pages";

const SignInPage: React.FC = () => {
  return (
    <div className="bg-[#000] flex items-center justify-center lg:h-full">
      <div className="w-full max-w-md px-8 py-12">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
