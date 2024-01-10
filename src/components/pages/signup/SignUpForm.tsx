import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { InputField, ButtonSpinner } from "../../common";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpUser } from "../../../api/auth";
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

  const clientId =
    import.meta.env.VITE_OAUTH_CLIENT_ID ||
    "276543592210-9u0egpv7hhdq8s4cbqtp38apf3ujkbv5.apps.googleusercontent.com";
  const handleLoginSuccess = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("tokenId" in response) {
      try {
        const res = await fetch("http://localhost:3000/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: response.tokenId }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  };

  const handleLoginFailure = (error: any) => {
    console.error("Google Sign In was unsuccessful. Try again later", error);
  };
  return (
    <div className="flex items-center justify-center sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6 mb-12">
          <h1 className="text-white font-sans text-5xl font-normal leading-[3rem]">
            Sign up
          </h1>
          <p className="text-white text-opacity-60 font-sans text-base font-normal leading-5">
            Enter your name, email and password to sign up!
          </p>
        </div>
        <div className="">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign up with Google"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            className="w-full flex justify-center h-[2.5rem] google-auth-button"
          />
          <div className="my-6">
            <p className=" text-white font-sans text-xs font-normal leading-3">
              Or sign up with your credentials
            </p>
          </div>
          <div className="flex flex-col gap-[1.12rem]">
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
              placeholderText="Email"
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
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="remember"
                className="focus:ring-transparent focus:ring-offset-0 bg-[#FFF] rounded-sm cursor-pointer checked:bg-[#1D37C6]"
                {...register("isAccepted")}
              />
              <label
                htmlFor="remember"
                className="text-white text-opacity-60 font-sans text-sm font-normal leading-[1.09375rem] cursor-pointer tracking-[-0.0175rem]"
              >
                Agree to UDATA’s{" "}
                <a href="#" className="text-white font-bold">
                  Terms of Use
                </a>{" "}
                and{" "}
                <a href="#" className="text-white font-bold">
                  Privacy Policy
                </a>
              </label>
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
              <button
                type="submit"
                className="w-full h-[2.5rem] py-1 px-3 rounded-xl bg-[#1D37C6] text-white font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]"
              >
                Sign Up
              </button>
            )}
            <div className="flex gap-2">
              <p className="text-white text-opacity-50 font-sans text-sm font-normal leading-[1.09375rem] tracking-[-0.0175rem]">
                Already have an account?
              </p>
              <Link
                to="/signin"
                className="text-white font-sans text-sm font-medium leading-[1.09375rem] tracking-[-0.0175rem]"
              >
                Sign in here.
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
