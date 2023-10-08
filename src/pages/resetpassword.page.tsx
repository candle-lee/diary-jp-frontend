import BackToDashboard from "../components/common/BackToDashboard"
import ResetPasswordForm from "../components/resetpassword/ResetPasswrodForm";

const ResetPasswordPage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px]">
                <div className="flex mt-[40px] items-center">
                   <BackToDashboard />
                </div>
                <div className="mt-[120px]">
                    <ResetPasswordForm />
                </div>
            </div>
        </div>
    )
}

export default ResetPasswordPage;