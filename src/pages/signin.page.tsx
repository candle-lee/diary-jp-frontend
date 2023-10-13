import SignInForm from "../components/signin/SignInForm";
import ImageSection from "../layout/ImageSection";

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
