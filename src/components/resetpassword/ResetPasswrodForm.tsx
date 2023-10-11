import InputField from "../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const ResetPasswordForm = () => {
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
    password1: z
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
    console.log("data" + data);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-white w-[410px] h-[610px]">
        <div className="">
          <div className="w-full h-[56px]">
            <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
              Reset your password
            </h1>
          </div>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              inputType="password"
              inputName="password"
              description="New Password"
              placeholderText="********"
              register={register}
              error={errors.password?.message}
            />
            <InputField
              inputType="password1"
              inputName="confirmPassword"
              description="Confirm New Password"
              placeholderText="********"
              register={register}
              error={errors.password1?.message}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center h-5">
                  <input
                    id="agree"
                    aria-describedby="agree"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                    {...register("isAccepted")}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="agree"
                    className="text-[#2B3674] text-sm font-normal leading-5 tracking-[-0.28px]"
                  >
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
                  </label>
                </div>
              </div>
            </div>
            {errors.isAccepted && (
              <p
                className="text-start text-xs italic text-red-500"
                style={{ marginTop: "8px" }}
              >
                {" "}
                {errors.isAccepted?.message}
              </p>
            )}
            <button
              type="submit"
              className="w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordForm;
