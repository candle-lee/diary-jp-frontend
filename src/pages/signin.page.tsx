import BackToDashboard from "../components/common/BackToDashboard";
import SignInForm from "../components/signin/SignInForm";

const SignInPage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px] mt-[40px]">
                <div className="flex items-center">
                   <BackToDashboard />
                </div>
                <div className="mt-[100px]">
                    <SignInForm />
                </div>
            </div>
        </div>
    )
}

export default SignInPage;