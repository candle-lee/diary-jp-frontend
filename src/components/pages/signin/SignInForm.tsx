import { Link } from "react-router-dom";
import HorizontalDivider from "../../common/HorizontalDivider";
import InputField from "../../common/InputField";

import { Button, Checkbox, Label } from "flowbite-react";

import { ButtonSpinner } from "../../common";
// import { GoogleSVGIcon } from "../../icons";
import { useSignInForm } from "./useSignInForm";
import PasswordInputField from "../../common/PasswordInputField";
import GoogleLoginButton from "./GoogleLoginButton";
import axios, { AxiosError } from "axios";

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    // handleGoogleSubmit,
    onSubmit,
    errors,
    isLoading,
    serverError,
  } = useSignInForm();

  const handleLoginSuccess = async (googleData: any) => {
    // Send token to backend for verification
    console.log(googleData);
    const res = await axios.post("http://localhost:8080/auth/google", {
      token: googleData.tokenId,
    });
    // Handle login success, e.g., store the received JWT token
  };

  const handleLoginFailure = (error: any) => {
    console.error("Google Sign In Failure:", error);
  };
  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="text-4xl font-bold font-sans leading-[2.8125rem] text-[#2B3674] flex justify-center mb-[5.06rem]">
          U DATA
        </div>
        <h1 className="text-4xl font-bold leading-[2.8125rem] font-sans tracking-tight text-[#2B3674] dark:text-white mb-[1.19rem]">
          Sign In
        </h1>
        <p className="text-[#A3AED0] font-normal text-base leading-5 mb-8">
          Enter your email and password to sign in!
        </p>
        <div className="">
          {/* <Button
            type="button"
            color="gray"
            onClick={() => handleGoogleSubmit()}
            className="flex items-center justify-center w-full h-[3.125rem] flex-shrink-0 rounded-2xl bg-[#F4F7FE] border-0 p-0"
          >
            <GoogleSVGIcon />
            <span className="text-[#2B3674] text-sm font-medium leading-5 tracking-[-0.0175rem]">
              Sign in with Google
            </span>
          </Button> */}
          <GoogleLoginButton
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
          />
          <div className="my-[1.625rem]">
            <HorizontalDivider />
          </div>
          <div className="flex flex-col gap-6 mb-[1.94rem]">
            <InputField
              inputType="email"
              inputName="email"
              description="Email"
              placeholderText="mail@simmmple.com"
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
          </div>
          <div className="flex items-center justify-between mb-8 pr-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox
                  id="remember"
                  className="focus:ring-transparent checked:bg-[#4318FF] bg-[#FFF] rounded-sm cursor-pointer"
                />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="remember"
                  className="text-sm font-sans text-[#2B3674] font-medium leading-[1.09375rem] tracking-[-0.0175rem]"
                >
                  Keep me logged in
                </Label>
              </div>
            </div>
            <Link
              to="/forgetpassword"
              className="text-sm font-sans text-[#4318FF] font-medium leading-[1.25rem] tracking-[-0.0175rem]"
            >
              Forget password?
            </Link>
          </div>
          <p
            className="text-start text-xs italic text-red-500 mt-4"
            style={{ display: serverError ? "block" : "none" }}
          >
            {serverError?.message}
          </p>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <Button
              type="submit"
              className="w-full h-[54px] text-white bg-[#4318FF] font-bold rounded-2xl text-sm px-2.5 py-2 text-center leading-[0.875rem] tracking-[-0.0175rem]"
            >
              Sign In
            </Button>
          )}
          <p className="text-sm font-normal text-[#2B3674] font-sans leading-[1.09375rem] tracking-[-0.0175rem] mt-[1.62rem]">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="font-bold text-[#4318FF] text-sm leading-[1.625rem] tracking-[-0.0175rem]"
            >
              Create an Account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
