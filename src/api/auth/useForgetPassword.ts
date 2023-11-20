import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../instance"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useForgetPassword = () => {
    const axios = httpAxios();
    const navigate = useNavigate();

    const forgetPassword = (email: string) => axios.post('/auth/forget-password', {email});
    const {mutate, isLoading} = useMutation({
        mutationFn: forgetPassword,
        onSuccess: ({data}) => {
            toast.success(`${data['message']}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/forgetpassverifyuser')
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

export default useForgetPassword;