import InputField from "../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Label } from "flowbite-react";
import { ButtonSpinner } from "../common/ButtonSpinner";
import { useResetPassword } from "../../api/auth/hooks/useResetPassword";
import BackToDashboard from "../common/BackToDashboard";

const ResetPasswordForm = () => {
  const { mutate, isLoading } = useResetPassword();
  const validationSchema = z.object({
    isAccepted: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
    password: z
      .string()
      .min(8, { message: "Password must be 8 characters or more" })
      .refine(
        (value) => {
          // Check if the password contains at least one letter
          return /[a-zA-Z]/.test(value);
        },
        { message: "Password must contain at least one letter" }
      )
      .refine(
        (value) => {
          // Check if the password contains at least one number
          return /\d/.test(value);
        },
        { message: "Password must contain at least one number" }
      )
      .refine(
        (value) => {
          // Check if the password contains at least one symbol (e.g., !@#$%^&*)
          return /[!@#$%^&*]/.test(value);
        },
        { message: "Password must contain at least one symbol" }
      )
      .refine(
        (value) => {
          // Check if the password doesn't start or end with a blank space
          return !/^\s|\s$/.test(value);
        },
        { message: "Password cannot start or end with a blank space" }
      )
      .refine(
        (value) => {
          // Check if the password is not particularly weak (e.g., password123)
          return !/(password|123|admin)/i.test(value);
        },
        { message: "Password cannot be particularly weak" }
      ),
    password1: z.string(),
  });

  validationSchema.refine((data) => data.password === data.password1, {
    message: "Passwords don't match",
    path: ["password1"],
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      password: "",
      password1: "",
    },
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    const formData = {
      password: data.password,
      password1: data.password1,
    };
    mutate(formData);
  };

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
