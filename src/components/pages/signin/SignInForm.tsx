/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import InputField from "../../common/InputField";
import { ButtonSpinner } from "../../common";
import useSignInForm  from "./useSignInForm";
import PasswordInputField from "../../common/PasswordInputField";
import { useGoogleLogin } from '@react-oauth/google';
import { GmailIcon } from "../../icons";
import {useGoogleSignin} from "../../../api/auth";
import { fetchGoogleUserInfo } from "../../../utils";

const SignInForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    useSignInForm();
    
    const { mutate: googleSignInMutate } = useGoogleSignin();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLoginSuccess = async (tokenResponse: any) => {
      const token = tokenResponse?.access_token;
      const data = await fetchGoogleUserInfo(token);
      googleSignInMutate(data);
    };
  
    const handleLoginFailure = (response: any) => {
      console.error('Failed to login with Google:', response);
    };
  
    const googleLogin = useGoogleLogin({
      onSuccess: handleLoginSuccess,
      onError: handleLoginFailure,
    });
  return (
    <div className="flex items-center justify-center sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="text-white font-sans text-5xl font-normal leading-[3rem]">
            Sign in
          </h1>
          <p className="text-white text-opacity-60 font-sans text-base font-normal leading-5">
            Enter your email and password to sign in!
          </p>
        </div>
        <div className="">
          <button type="button" onClick={() => googleLogin()} className="bg-[#F4F7FE] rounded-xl w-full h-10 flex gap-[0.56rem] items-center justify-center">
            <GmailIcon />
            <p className="text-[#2B3674] text-sm font-medium leading-[142.857%] tracking-[-0.0175rem]">
              Sign in with Google
            </p>
          </button>
          <div className="my-6">
            <p className=" text-white font-sans text-xs font-normal leading-3">
              Or sign in with your email
            </p>
          </div>
          <div className="flex flex-col gap-[1.12rem]">
            <InputField
              inputType="email"
              inputName="email"
              description="Email"
              placeholderText="Email"
              register={register}
              error={errors.email?.message}
            />
            <PasswordInputField
              inputType="password"
              inputName="password"
              description="Password"
              placeholderText="Min. 8 characters"
              register={register}
              error={errors.password?.message}
            />
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="remember"
                className="focus:ring-transparent focus:ring-offset-0 bg-[#FFF] rounded-sm cursor-pointer checked:bg-[#1D37C6]"
              />
              <label
                htmlFor="remember"
                className="text-white text-opacity-60 font-sans text-sm font-normal leading-[1.09375rem] cursor-pointer tracking-[-0.0175rem]"
              >
                Keep me logged in
              </label>
            </div>
            <Link
              to="/forgetpassword"
              className="text-white font-sans text-sm font-medium leading-[1.09375rem] tracking-[-0.0175rem]"
            >
              Forget password?
            </Link>
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <button
                type="submit"
                className="w-full h-[2.5rem] py-1 px-3 rounded-xl bg-[#1D37C6] text-white font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]"
              >
                Sign In
              </button>
            )}
            <div className="flex gap-2">
              <p className="text-white text-opacity-50 font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]">
                Not registered yet?
              </p>
              <Link
                to="/signup"
                className="text-white font-sans text-sm font-medium leading-[1.09375rem] tracking-[-0.0175rem]"
              >
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
