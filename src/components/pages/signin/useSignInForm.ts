import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginUser } from "../../../api/auth";

const useSignInForm = () => {
  const { mutate, isLoading, error } = useLoginUser();

  const validationSchema = z.object({
    email: z
      .string()
      .min(3, { message: "Email is required." })
      .email({ message: "Must be a valid email." }),
    password: z.string().min(8, { message: "Password must be required." }),
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
    const formData = {
      email: data.email,
      password: data.password,
    };
    mutate(formData);
  };

  const handleGoogleSubmit = () => {
    alert("google signin");
  };

  return {
    register,
    handleSubmit,
    handleGoogleSubmit,
    onSubmit,
    errors,
    isLoading,
    serverError: error,
  };
};

export default useSignInForm;
