import { SignInForm } from "../components/pages";
import { ImageSection } from "../components/common";

const SignInPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <SignInForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default SignInPage;
