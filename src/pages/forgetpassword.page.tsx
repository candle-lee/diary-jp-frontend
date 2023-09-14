import BackToDashboard from "../components/common/BackToDashboard"
import ForgetPasswordForm from "../components/forgetpassword/ForgetPasswordForm";

const ForgetPasswordPage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px]">
                <div className="flex mt-[40px] items-center">
                   <BackToDashboard />
                </div>
                <div className="mt-[201px]">
                    <ForgetPasswordForm />
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswordPage;