import InputField from "../common/InputField";

const ForgetPasswordForm = () => {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 mb-[271px]">
            <div className="bg-white w-[410px] h-[610px]">
                <div className="">
                    <div className="w-full h-[56px]">
                        <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
                            Forgot your password?
                        </h1>    
                    </div>
                    <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
                        Don't fret! Just type in your email.
                    </p>
                    <form className="space-y-4 md:space-y-6" action="#">
                        <InputField inputType="email" inputName="email" description="Your email" placeholderText="name@company@com" isRequired={true} />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex items-center h-5">
                                    <input id="agree" aria-describedby="agree" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50" required={true} />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="agree" className="text-[#2B3674] text-sm font-normal leading-5 tracking-[-0.28px]">I accept the UDATA’s <a href="#" className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]">Terms of Use</a> and <a href="#" className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]">Privacy Policy</a>.</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center">Reset password</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ForgetPasswordForm;