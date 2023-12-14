import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPassPasscode } from "../../../api/auth";

export const useForgetPasswordForm = () => {
  const { mutate, isLoading, error } = useResetPassPasscode();

  const validationSchema = z.object({
    email: z.string().min(1, "Email is required").email("Must be a valid email"),
    isAccepted: z.literal(true, {
        errorMap: () => ({ message: "You must accept Terms and Conditions" }),
      })
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<ValidationSchema>({
    defaultValues: {
      email: "",
      isAccepted: undefined,
    },
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    mutate(data.email);
  };

  return { register, handleSubmit, onSubmit, errors, isLoading, serverError: error };
};
