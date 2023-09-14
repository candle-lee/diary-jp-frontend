import BackToDashboard from "../components/common/BackToDashboard";
import SignUpForm from "../components/signup/SignUpForm";

const SignInPage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px]">
                <div className="flex mt-[40px] items-center">
                    <BackToDashboard />
                </div>
                <div className="mt-[201px]">
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}

export default SignInPage;