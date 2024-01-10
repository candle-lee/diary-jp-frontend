import { SignUpForm } from "../components/pages";

const SignUpPage: React.FC = () => {
  return (
    <div className="bg-[#000] flex items-center justify-center lg:h-full">
      <div className="w-full max-w-md px-8 py-12">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
