import InputField from "../../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendPasscode } from "../../../api/auth";
import { ButtonSpinner, BackToDashboard } from "../../common";
import { Checkbox, Label } from "flowbite-react";

const PasscodeForm: React.FC = () => {
  const { mutate, isLoading } = useSendPasscode();

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
    <div className="flex items-center justify-center px-4 py-6 sm:px-0 lg:py-0">
      <form
        className="w-full max-w-md space-y-4 md:space-y-6 xl:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <BackToDashboard />
        <h1 className="text-3xl font-bold leading-9 tracking-tight text-[#2B3674] dark:text-white">
          Please Enter Code
        </h1>
        <div className="">
          <InputField
            inputType="text"
            inputName="passcode"
            description="Your Passcode"
            placeholderText="123456"
            register={register}
            error={errors.passcode?.message}
          />
          <div className="flex items-center justify-between mb-4">
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
            <button
              type="submit"
              className="w-full h-[54px] text-white bg-[#4318FF] font-medium rounded-2xl text-sm px-2.5 py-2 text-center"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PasscodeForm;
