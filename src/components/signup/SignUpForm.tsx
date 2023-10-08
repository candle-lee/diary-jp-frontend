import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import HorizontalDivider from "../common/HorizontalDivider";
import InputField from "../common/InputField";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpUser } from "../../api/auth/hooks/useSignUp";
("use client");

import { Button } from "flowbite-react";
import { ButtonSpinner } from "../common/ButtonSpinner";

const SignUpForm = () => {
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
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-white w-[410px]">
        <div className="">
          <div className="w-[110px] h-[56px]">
            <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
              Sign Up
            </h1>
          </div>
          <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
            Enter your email and password to sign up!
          </p>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Button
              color="gray"
              type="button"
              onClick={() => handleGoogleSubmit()}
              className="flex items-center justify-center w-[410px] h-[50px] flex-shrink-0 rounded-2xl bg-secondary-grey-300 bg-[#F4F7FE]"
            >
              <img
                className="w-5 h-5 mr-[9px]"
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span className="text-[#2B3674] font-medium text-sm tracking-[-0.28px]">
                Sign up with Google
              </span>
            </Button>
            <HorizontalDivider />
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
            <InputField
              inputType="password"
              inputName="password"
              description="Password"
              placeholderText="********"
              register={register}
              error={errors.password?.message}
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
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <Button
                type="submit"
                className="w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center"
              >
                Sign Up
              </Button>
            )}
            <p className="text-sm font-normal text-[#2B3674] leading-[26px] tracking-[-0.28px]">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]"
              >
                Sign in here.
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpForm;
