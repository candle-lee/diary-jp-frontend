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
                className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur"
            });
            navigate('/forgetpassword-validation')
        },
        onError: (error:any) => {
            toast.error(`Error: ${error?.response?.data?.message}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "error",
                position: "top-right",
                className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur"
            });
        },
    });

    return {mutate, isLoading, error}
}

export default useResetPassPasscode;