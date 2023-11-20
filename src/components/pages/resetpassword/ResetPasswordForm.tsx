import { Button, Checkbox, Label } from "flowbite-react";
import { ButtonSpinner, InputField, BackToDashboard } from "../../common";
import { useResetPasswordForm } from "./useResetPasswordForm";

const ResetPasswordForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading, serverError } =
    useResetPasswordForm();

  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackToDashboard />
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-[#2B3674] dark:text-white">
          Reset your password
        </h1>
        <div className="">
          <InputField
            inputType="password"
            inputName="password"
            description="New Password"
            placeholderText="********"
            register={register}
            error={errors.password?.message}
          />
          <InputField
            inputType="password"
            inputName="confirmPassword"
            description="Confirm New Password"
            placeholderText="********"
            register={register}
            error={errors.password1?.message}
          />
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <Checkbox id="agree" {...register("isAccepted")} />
              </div>
              <div className="ml-3 text-sm">
                <Label htmlFor="agree">
                  Agree to UDATA’s{" "}
                  <a
                    href="#"
                    className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]"
                  >
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]"
                  >
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>
            </div>
          </div>
          {errors.isAccepted && (
            <p
              className="text-start text-xs italic text-red-500 my-4"
              style={{ marginTop: "8px" }}
            >
              {" "}
              {errors.isAccepted?.message}
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
              className="w-full h-[54px] text-white bg-[#4318FF] font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Reset Password
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
