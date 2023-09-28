import { Link } from "react-router-dom";
import HorizontalDivider from "../common/HorizontalDivider";
import InputField from "../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm = () => {

  const validationSchema = z.object({
    email: z
      .string()
      .min(3, { message: "Email is required" })
      .email({ message: "Must be a valid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    console.log("data" + data);
  };

  const handleGoogleSubmit = () => {};

  return (
    <section className="bg-gray-50 dark:bg-gray-900 mb-[271px]">
      <div className="bg-white w-[410px] h-[610px]">
        <div className="">
          <div className="w-[110px] h-[56px]">
            <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
              Sign In
            </h1>
          </div>
          <p className="text-secondary-grey-600 text-[#A3AED0] font-normal text-base leading-4 tracking-[-0.32px] mb-9">
            Enter your email and password to sign in!
          </p>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <button
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
                Sign in with Google
              </span>
            </button>
            <HorizontalDivider />
            <InputField
              inputType="email"
              inputName="email"
              description="Email"
              placeholderText="name@company.com"
              isRequired={true}
              register={register}
              error={errors.email?.message}
            />
            <InputField
              inputType="password"
              inputName="password"
              description="Password"
              placeholderText="Min. 8 characters"
              isRequired={true}
              register={register}
              error={errors.password?.message}
            />
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                    required={true}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-[#2B3674] text-sm font-normal leading-5 tracking-[-0.28px]"
                  >
                    Keep me logged in
                  </label>
                </div>
              </div>
              <Link
                to="/forgetpassword"
                className="text-sm text-[#4318FF] font-medium leading-5 tracking-[-0.28px]"
              >
                Forget password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center"
            >
              Sign In
            </button>
            <p className="text-sm font-normal text-[#2B3674] leading-[26px] tracking-[-0.28px]">
              Not registered yet?{" "}
              <Link
                to="/signup"
                className="font-bold text-[#4318FF] leading-[26px] tracking-[-0.28px]"
              >
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
