import InputField from "../../common/InputField";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendPasscode } from "../../../api/auth";
import { BackButton, ButtonSpinner } from "../../common";

const PasscodeForm: React.FC = () => {
  const { mutate, isLoading } = useSendPasscode();

  const validationSchema = z.object({
    passcode: z.string().min(5, { message: "Passcode is required" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      passcode: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    mutate(data.passcode);
  };

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
                Please Enter Code
              </h1>
            </div>
            <div className="flex flex-col gap-[1.12rem]">
              <InputField
                inputType="text"
                inputName="passcode"
                description="Your Passcode"
                placeholderText="123456"
                register={register}
                error={errors.passcode?.message}
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

export default PasscodeForm;
