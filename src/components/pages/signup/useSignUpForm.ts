import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignUpUser } from "../../../api/auth";

export const useSignUpForm = () => {
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

    return { register, handleSubmit, onSubmit, errors, isLoading };

}