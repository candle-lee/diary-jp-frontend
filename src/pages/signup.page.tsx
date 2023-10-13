import SignUpForm from "../components/signup/SignUpForm";
import ImageSection from "../layout/ImageSection";

const SignInPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <SignUpForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default SignInPage;
