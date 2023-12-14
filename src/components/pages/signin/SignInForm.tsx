import { Link } from "react-router-dom";
import HorizontalDivider from "../../common/HorizontalDivider";
import InputField from "../../common/InputField";

import { Button, Checkbox, Label } from "flowbite-react";

import { ButtonSpinner } from "../../common";
import { GoogleSVGIcon } from "../../icons";
import BackToDashboard from "../../common/BackToDashboard";
import { useSignInForm } from "./useSignInForm";

const SignInForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    handleGoogleSubmit,
    onSubmit,
    errors,
    isLoading,
    serverError,
  } = useSignInForm();
  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackToDashboard />
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-[#2B3674] dark:text-white">
          Sign In
        </h1>
        <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
          Enter your email and password to sign in!
        </p>
        <div className="">
          <Button
            type="button"
            color="gray"
            onClick={() => handleGoogleSubmit()}
            className="flex items-center justify-center w-full h-[50px] flex-shrink-0 rounded-2xl bg-secondary-grey-300 bg-[#F4F7FE]"
          >
            <GoogleSVGIcon />
            Sign in with Google
          </Button>
          <div className="my-4">
            <HorizontalDivider />
          </div>
          <div>
            <InputField
              inputType="email"
              inputName="email"
              description="Email"
              placeholderText="name@company.com"
              register={register}
              error={errors.email?.message}
            />
            <InputField
              inputType="password"
              inputName="password"
              description="Password"
              placeholderText="Min. 8 characters"
              register={register}
              error={errors.password?.message}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox id="remember" />
              </div>
              <div className="ml-3 text-sm">
                <Label htmlFor="remember">Remember me</Label>
              </div>
            </div>
            <Link
              to="/forgetpassword"
              className="text-sm text-[#4318FF] font-medium leading-5 tracking-[-0.28px]"
            >
              Forget password?
            </Link>
          </div>
          {serverError && (
            <p className="text-xs italic text-red-500">
              Error: {serverError.message}
            </p>
          )}
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <Button
              type="submit"
              className="w-full h-[54px] text-white bg-[#4318FF] font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Sign In
            </Button>
          )}
          <p className="text-sm font-normal text-[#2B3674] leading-7 tracking-[-0.28px] mt-4">
            Not registered yet?{" "}
            <Link
              to="/signup"
              className="font-bold text-[#4318FF] leading-7 tracking-[-0.28px]"
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
