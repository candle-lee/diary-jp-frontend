import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSendCodeResetPass } from "../../../api/auth";

const useForgetPassVerifyForm = () => {
  const { mutate, isLoading, error } = useSendCodeResetPass();

  const validationSchema = z.object({
    passcode: z
      .string()
      .min(5, { message: "Enter at least 5 characters for the passcode." }),
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

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    serverError: error,
  };
};

export default useForgetPassVerifyForm;
