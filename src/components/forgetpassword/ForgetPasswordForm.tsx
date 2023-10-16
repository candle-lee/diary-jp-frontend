import InputField from "../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSpinner } from "../common/ButtonSpinner";
import { useResetPassPasscode } from "../../api/auth/hooks/useResetPassPasscode";
import BackToDashboard from "../common/BackToDashboard";
import { Button, Checkbox, Label } from "flowbite-react";
import GoogleSVGIcon from "../../assets/icons/GoogleSVGIcon";
import HorizontalDivider from "../common/HorizontalDivider";

const ForgetPasswordForm = () => {
  const { mutate, isLoading } = useResetPassPasscode();

  const validationSchema = z.object({
    email: z
      .string()
      .min(3, { message: "Email is required" })
      .email({ message: "Must be a valid email" }),
    isAccepted: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      email: "",
      isAccepted: undefined,
    },
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    mutate(data.email);
  };
  const handleGoogleSubmit = () => {};

  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackToDashboard />
        <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
          Forgot your password?
        </h1>
        <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
          Don't fret! Just type in your email.
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
          <InputField
            inputType="email"
            inputName="email"
            description="Your email"
            placeholderText="name@company@com"
            register={register}
            error={errors.email?.message}
          />
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <Checkbox id="agree" {...register("isAccepted")} />
              </div>
              <div className="ml-3 text-sm">
                <Label htmlFor="agree">
                  I accept the UDATA’s{" "}
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
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <Button
              type="submit"
              className="w-full h-[54px] text-white bg-[#4318FF] font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Rest Password
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
