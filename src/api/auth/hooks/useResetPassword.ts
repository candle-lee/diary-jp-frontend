import { useNavigate } from "react-router-dom";
import { httpAxios } from "../../instance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export interface IResetPassword {
    password: string,
    password1: string,
}

export const useResetPassword = () => {
    const axios = httpAxios();
    const navigate = useNavigate()

    const resetPassword = (formData: IResetPassword) => axios.post('/auth/reset-password', {...formData});
    const {mutate, isLoading} = useMutation({
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success(`Password is successfully changed.`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/signin')
        },
        onError: (error: any) => {
            toast.error(`Error: ${error?.response?.data?.message}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "error",
                position: "top-right",
            });
        },
    });
    return {mutate, isLoading}
}