import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../instance"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useResetPassPasscode = () => {
    const axios = httpAxios();
    const navigate = useNavigate();
    const resetPassword = (email: string) => axios.post('/auth/forget-password', {email});
    const {mutate, isLoading, error} = useMutation({
        mutationFn: resetPassword,
        onSuccess: ({data}) => {
            toast.success(`${data['message']}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/forgetpassword-validation')
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

    return {mutate, isLoading, error}
}

export default useResetPassPasscode;