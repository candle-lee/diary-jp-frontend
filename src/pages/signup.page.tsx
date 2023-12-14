import { SignUpForm } from "../components/pages";
import { ImageSection } from "../components/common";

const SignUpPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <SignUpForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default SignUpPage;
