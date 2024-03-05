import { ForgetPassVerifyUserForm } from "../components/pages";

const ForgetPassVerifyUserPage: React.FC = () => {
  return (
    <div className="bg-[#000] flex items-center justify-center h-full">
      <div className="w-full max-w-md px-8 py-12">
        <ForgetPassVerifyUserForm />
      </div>
    </div>
  );
};

export default ForgetPassVerifyUserPage;
