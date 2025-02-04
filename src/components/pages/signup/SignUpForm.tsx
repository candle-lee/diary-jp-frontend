/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import { InputField, ButtonSpinner } from "../../common";
import PasswordInputField from "../../common/PasswordInputField";
import useSignUpForm from "./useSignUpForm";
import { GmailIcon } from "../../icons";
import { useGoogleLogin } from "@react-oauth/google";
import { fetchGoogleUserInfo } from "../../../utils";
import {useGoogleSignup} from "../../../api/auth";

const SignUpForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    useSignUpForm();
  const { mutate: googleSignUpMutate } = useGoogleSignup();

  const navigate = useNavigate();

  const handleLoginSuccess = async (tokenResponse: any) => {
    const token = tokenResponse?.access_token;
    const data = await fetchGoogleUserInfo(token);
    googleSignUpMutate(data);
  };

  const handleLoginFailure = (response: any) => {
    console.error('Failed to login with Google:', response);
  };
  const googleRegister = useGoogleLogin({
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
            Sign up
          </h1>
          <p className="text-white text-opacity-60 font-sans text-base font-normal leading-5">
            Enter your email and password to sign up!
          </p>
        </div>
        <div className="">
          <button type="button" onClick={() => googleRegister()} className="bg-[#F4F7FE] rounded-xl w-full h-10 flex gap-[0.56rem] items-center justify-center">
            <GmailIcon />
            <p className="text-[#2B3674] text-sm font-medium leading-[142.857%] tracking-[-0.0175rem]">
              Sign up with Google
            </p>
          </button>
          <div className="my-6">
            <p className=" text-white font-sans text-xs font-normal leading-3">
              Or sign up with your credentials
            </p>
          </div>
          <div className="flex flex-col gap-[1.12rem]">
            <InputField
              inputType="username"
              inputName="username"
              description="User Name"
              placeholderText="User Name"
              register={register}
              error={errors.username?.message}
            />
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
            <div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="focus:ring-transparent focus:ring-offset-0 bg-[#FFF] rounded-sm cursor-pointer checked:bg-[#1D37C6]"
                  {...register("isAccepted")}
                />
                <label
                  htmlFor="remember"
                  className="text-white text-opacity-60 font-sans text-xs lg:text-sm font-normal leading-[1.09375rem] cursor-pointer tracking-[-0.0175rem]"
                >
                  I agree to the {" "}
                  <a
                    onClick={() => navigate("/privacy-policy")}
                    className="text-white font-bold"
                  >
                    Privacy Policy and Terms of Use
                  </a>
                </label>
              </div>
              {errors.isAccepted && (
                <p
                  className="text-start text-xs font-normal leading-[124%] text-[#ED2B2B] mt-2"
                  style={{ marginTop: "8px" }}
                >
                  {" "}
                  {errors.isAccepted?.message}
                </p>
              )}
            </div>
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <button
                type="submit"
                className="w-full h-[2.5rem] py-1 px-3 rounded-xl bg-[#1D37C6] text-white font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]"
              >
                Sign Up
              </button>
            )}
            <div className="flex gap-2">
              <p className="text-white text-opacity-50 font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]">
                Already registered?
              </p>
              <Link
                to="/verifyuser"
                className="text-white font-sans text-sm font-medium leading-[1.09375rem] tracking-[-0.0175rem]"
              >
                Sign in with your account.
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
