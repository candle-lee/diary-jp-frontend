import ForgetPassVerifyUserForm from "../components/forgetpassverifyuser/ForgetPassVerifyUserForm";
import ImageSection from "../layout/ImageSection";

const ForgetPassVerifyUserPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <ForgetPassVerifyUserForm />
        <ImageSection />
      </div>
    </div>
  );
};

export default ForgetPassVerifyUserPage;
