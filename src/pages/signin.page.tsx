import Arrow_Down from "../assets/icons/Arrow_Down";
import SignInForm from "../components/signin/SignInForm";

const SignInPage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px]">
                <div className="flex mt-[40px] items-center">
                    <Arrow_Down />
                    <a href="" className="text-[#A3AED0] text-sm font-medium leading-[30px] tracking-[-0.28px] ml-[6px]">Back to dashboard</a>
                </div>
                <div className="mt-[201px]">
                    <SignInForm />
                </div>
            </div>
        </div>
    )
}

export default SignInPage;