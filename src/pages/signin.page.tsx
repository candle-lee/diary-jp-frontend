import BackToDashboard from "../components/common/BackToDashboard";
import SignInForm from "../components/signin/SignInForm";

const SignInPage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px]">
                <div className="flex mt-[40px] items-center">
                   <BackToDashboard />
                </div>
                <div className="mt-[201px]">
                    <SignInForm />
                </div>
            </div>
        </div>
    )
}

export default SignInPage;