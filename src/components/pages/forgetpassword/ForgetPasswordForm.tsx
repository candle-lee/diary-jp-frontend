import React from "react";
import { ButtonSpinner } from "../../common";
import InputField from "../../common/InputField";
import useForgetPasswordForm from "./useForgetPasswordForm";
import BackButton from "../../common/BackButton";

const ForgetPasswordForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    useForgetPasswordForm();

  return (
    <div className="flex flex-col gap-[1.12rem]">
      <div className="flex items-center justify-center sm:px-0 lg:py-0">
        <form
          className="w-full max-w-md xl:max-w-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-2xl font-normal leading-[125%]">
                Password Reset{" "}
              </h1>
              <p className="text-white text-opacity-60 text-base font-normal leading-[125%]">
                Enter your registered email address to reset your password
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
              {isLoading ? (
                <ButtonSpinner />
              ) : (
                <button
                  type="submit"
                  className="w-full h-[2.5rem] py-1 px-3 rounded-xl bg-[#1D37C6] text-white font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]"
                >
                  Send
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
