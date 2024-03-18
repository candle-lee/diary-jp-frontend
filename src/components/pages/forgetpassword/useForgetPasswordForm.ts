import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPassPasscode } from "../../../api/auth";

const useForgetPasswordForm = () => {
  const { mutate, isLoading, error } = useResetPassPasscode();

  const validationSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Must be a valid email"),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    localStorage.setItem("email", data.email);
    mutate(data.email);
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

export default useForgetPasswordForm;
