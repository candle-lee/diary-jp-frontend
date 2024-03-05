import { BackButton, ButtonSpinner } from "../../common";
import useResetPasswordForm  from "./useResetPasswordForm";
import PasswordInputField from "../../common/PasswordInputField";

const ResetPasswordForm: React.FC = () => {
  const { register, handleSubmit, onSubmit, errors, isLoading } =
    useResetPasswordForm();

  return (
    <div className="flex flex-col gap-[1.12rem]">
        <div>
          <BackButton />
        </div>
      <div className="flex items-center justify-center sm:px-0 lg:py-0">
        <form
          className="w-full max-w-md xl:max-w-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-2xl font-normal leading-[125%]">
                Reset your password
              </h1>
            </div>
            <div className="flex flex-col gap-[1.12rem]">
              <PasswordInputField
                inputType="password"
                inputName="password"
                description="New Password"
                placeholderText="********"
                register={register}
                error={errors.password?.message}
              />
              <PasswordInputField
                inputType="password"
                inputName="password1"
                description="Confirm New Password"
                placeholderText="********"
                register={register}
                error={errors.password1?.message}
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
    </div>
  );
};

export default ResetPasswordForm;
