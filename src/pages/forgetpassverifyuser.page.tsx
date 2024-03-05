import { ForgetPassVerifyUserForm } from "../components/pages";

const ForgetPassVerifyUserPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="grid lg:h-screen lg:grid-cols-2">
        <ForgetPassVerifyUserForm />
      </div>
    </div>
  );
};

export default ForgetPassVerifyUserPage;
