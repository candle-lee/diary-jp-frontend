import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  HorizontalDivider,
  InputField,
  ButtonSpinner,
  BackToDashboard,
} from "../../common";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpUser } from "../../../api/auth";
import { Button, Checkbox, Label } from "flowbite-react";
import { GoogleSVGIcon } from "../../icons";
import PasswordInputField from "../../common/PasswordInputField";

const SignUpForm: React.FC = () => {
  const { mutate, isLoading } = useSignUpUser();

  const validationSchema = z.object({
    fullname: z.string().min(3, { message: "FullName is required" }),
    email: z
      .string()
      .min(3, { message: "Email is required" })
      .email({ message: "Must be a valid email" }),
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
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      fullname: "",
      email: "",
      isAccepted: undefined,
      password: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    const formData = {
      username: data.fullname,
      email: data.email,
      password: data.password,
    };
    mutate(formData);
  };

  const handleGoogleSubmit = () => {};

  return (
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackToDashboard />
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-[#2B3674] dark:text-white">
          Sign Up
        </h1>
        <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
          Enter your email and password to sign up!
        </p>
        <div className="">
          <Button
            color="gray"
            type="button"
            onClick={() => handleGoogleSubmit()}
            className="flex items-center justify-center w-full h-[50px] flex-shrink-0 rounded-2xl bg-secondary-grey-300 bg-[#F4F7FE]"
          >
            <GoogleSVGIcon />
            Sign up with Google
          </Button>
          <div className="my-4">
            <HorizontalDivider />
          </div>
          <InputField
            inputType="text"
            inputName="fullname"
            description="Full Name"
            placeholderText="e.g. Bonnie Green"
            register={register}
            error={errors.fullname?.message}
          />
          <InputField
            inputType="email"
            inputName="email"
            description="Email"
            placeholderText="e.g. root@root.com"
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
          <div className="flex items-center justify-between my-4">
            <div className="flex items-center">
              <div className="flex items-center h-5">
                <Checkbox id="remember" {...register("isAccepted")} />
              </div>
              <div className="ml-3 text-sm">
                <Label htmlFor="remember">
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
              Sign Up
            </Button>
          )}
          <p className="text-sm font-normal text-[#2B3674] leading-7 tracking-[-0.28px] mt-4">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]"
            >
              Sign in here.
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
