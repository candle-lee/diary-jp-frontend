import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useResetPassword } from "../../../api/auth";

const useResetPasswordForm = () => {
  const { mutate, isLoading, error } = useResetPassword();

  const validationSchema = z
    .object({
      password: z
        .string()
        .min(8, { message: "Password must be 8 characters or more" })
        .regex(/[a-zA-Z]/, "Password must contain at least one letter")
        .regex(/\d/, "Password must contain at least one number")
        .regex(/[!@#$%^&*]/, "Password must contain at least one symbol")
        .regex(
          /^(?!\s).*[^\s]$/,
          "Password cannot start or end with a blank space"
        )
        .regex(
          /^(?!.*(password|123|admin))/i,
          "Password cannot be particularly weak"
        ),
      password1: z.string(),
    })
    .refine((data) => data.password === data.password1, {
      message: "Passwords don't match",
      path: ["password1"], // This ensures the error is attached to the confirm password field
    });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = async (
    data: ValidationSchema
  ) => {
    const formData = {
      password: data.password,
      password1: data.password1,
    };
    mutate(formData);
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

export default useResetPasswordForm;
