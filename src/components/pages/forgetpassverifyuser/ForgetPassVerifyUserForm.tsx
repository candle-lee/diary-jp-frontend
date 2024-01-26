import React from "react";
import { ButtonSpinner, InputField } from "../../common";
import { Button, Checkbox, Label } from "flowbite-react";
import { useForgetPassVerifyForm } from "./useForgetPassVerifyForm";

const ForgetPassVerifyUserForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading, serverError } =
    useForgetPassVerifyForm();

  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-[#2B3674] dark:text-white">
          Please Enter Code
        </h1>
        <InputField
          inputType="text"
          inputName="passcode"
          description="Your Passcode"
          placeholderText="123456"
          register={register}
          error={errors.passcode?.message}
        />
        <div className="flex items-center mb-4">
          <Checkbox id="agree" {...register("isAccepted")} />
          <Label htmlFor="agree" className="ml-3">
            Agree to UDATA’s
            <a href="/terms-of-use" className="font-bold text-[#4318FF]">
              {" "}
              Terms of Use{" "}
            </a>
            and
            <a href="/privacy-policy" className="font-bold text-[#4318FF]">
              {" "}
              Privacy Policy{" "}
            </a>
            .
          </Label>
        </div>
        {errors.isAccepted && (
          <p className="text-start text-xs italic text-red-500 my-4">
            {errors.isAccepted.message}
          </p>
        )}
        {serverError && (
          <p className="text-start text-xs italic text-red-500 my-4">
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
            Send
          </Button>
        )}
      </form>
    </div>
  );
};

export default ForgetPassVerifyUserForm;
