import BackToDashboard from "../components/common/BackToDashboard";
import ForgetPassVerifyUserForm from "../components/forgetpassverifyuser/ForgetPassVerifyUserForm";

const ForgetPassVerifyUserPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="ml-[308px] mt-[40px]">
          <div className="flex items-center">
            <BackToDashboard />
          </div>
          <div className="mt-[100px]">
            <ForgetPassVerifyUserForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassVerifyUserPage;
