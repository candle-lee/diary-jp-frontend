import { useNavigate } from "react-router-dom";
import HorizontalDivider from "../common/HorizontalDivider";

const SignInForm = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-gray-50 dark:bg-gray-900 mb-[271px]">
            <div className="bg-white w-[410px] h-[610px]">
                <div className="">
                    <div className="w-[110px] h-[56px]">
                        <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
                            Sign In
                        </h1>    
                    </div>
                    <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
                        Enter your email and password to sign in!
                    </p>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <button className="flex items-center justify-center w-[410px] h-[50px] flex-shrink-0 rounded-2xl bg-secondary-grey-300 bg-[#F4F7FE]">
                            <img className="w-5 h-5 mr-[9px]" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                            <span className="text-[#2B3674] font-medium text-sm tracking-[-0.28px]">Sign in with Google</span>
                        </button>
                        <HorizontalDivider />
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-[#2B3674] mt-[24px] mb-[13px]">Email</label>
                            <input type="email" name="email" id="email" className="placeholder-[#A3AED0] w-[410px] h-[50px] flex-shrink-0 rounded-[16px] border border-secondary-grey-500 border-[#E0E5F2]" placeholder="name@company.com" required={true} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-[#2B3674] mt-[24px] mb-[13px]">Password</label>
                            <input type="password" name="password" id="password" placeholder="Min. 8 characters" className="placeholder-[#A3AED0] w-[410px] h-[50px] flex-shrink-0 rounded-[16px] border border-secondary-grey-500 border-[#E0E5F2]" required={true} />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required={true} />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-[#2B3674] text-sm font-normal leading-5 tracking-[-0.28px]">Keep me logged in</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm text-[#4318FF] font-medium leading-5 tracking-[-0.28px]">Forget password?</a>
                        </div>
                        <button type="submit" className="w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center">Sign In</button>
                        <p className="text-sm font-normal text-[#2B3674] leading-[26px] tracking-[-0.28px]">
                            Not registered yet? <a href="#" onClick={() => {navigate('/signup')}} className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]">Create an Account</a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignInForm;