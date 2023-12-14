import React from "react";
import { Button, Checkbox, Label } from "flowbite-react";
import { ButtonSpinner, BackToDashboard } from "../../common";
import InputField from "../../common/InputField";
import { useForgetPasswordForm } from "./useForgetPasswordForm";

const ForgetPasswordForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading, serverError } =
    useForgetPasswordForm();

  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackToDashboard />
        <h1 className="text-3xl font-bold text-[#2B3674] dark:text-white">
          Forgot your password?
        </h1>
        <p className="text-secondary-grey-600 text-[#A3AED0] mb-9">
          Don't fret! Just type in your email.
        </p>

        <InputField
          inputType="email"
          inputName="email"
          description="Your email"
          placeholderText="name@company.com"
          register={register}
          error={errors.email?.message}
        />
        <div className="flex items-center mb-4">
          <Checkbox id="agree" {...register("isAccepted")} />
          <Label htmlFor="agree" className="ml-3">
            I accept UDATA’s{" "}
            <a href="/terms" className="font-bold text-[#4318FF]">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="/privacy" className="font-bold text-[#4318FF]">
              Privacy Policy
            </a>
            .
          </Label>
        </div>
        {errors.isAccepted && (
          <p className="text-xs italic text-red-500">
            {errors.isAccepted.message}
          </p>
        )}
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
            className="w-full h-[54px] bg-[#4318FF] text-white"
          >
            Reset Password
          </Button>
        )}
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
