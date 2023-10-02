import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../../instance"
import { toast } from "react-toastify";
import { IResetPassword } from "../../../constant/interfaces";


export const useResetPassword = () => {
    const axios = httpAxios();
    const resetPassword = (formData: IResetPassword) => axios.post('/auth/forget-password', formData);
    const {mutate, isLoading} = useMutation({
        mutationFn: resetPassword,
        onSuccess: ({data}: any) => {
            toast.success(`User registered succesfully`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
        },
        onError: (error:any) => {
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