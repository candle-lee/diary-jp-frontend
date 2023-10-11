import InputField from "../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonSpinner } from "../common/ButtonSpinner";
import { useSendCodeResetPass } from "../../api/auth/hooks/useSendCodeResetPass";

const ForgetPassVerifyUserForm = () => {
  const { mutate, isLoading } = useSendCodeResetPass();

  const validationSchema = z.object({
    passcode: z.string().min(5, { message: "Passcode is required" }),
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
      passcode: "",
      isAccepted: undefined,
    },
    resolver: zodResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    mutate(data.passcode);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="bg-white w-[410px] h-[610px]">
        <div className="">
          <div className="w-full h-[56px]">
            <h1 className="text-3xl font-bold leading-[36px] tracking-tight text-[#2B3674] dark:text-white">
              Please Enter Code
            </h1>
          </div>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField
              inputType="text"
              inputName="passcode"
              description="Your Passcode"
              placeholderText="123456"
              register={register}
              error={errors.passcode?.message}
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
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <button
                type="submit"
                className="w-[410px] h-[54px] text-white bg-[#4318FF] font-medium rounded-[16px] text-sm px-2.5 py-2 text-center"
              >
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassVerifyUserForm;
