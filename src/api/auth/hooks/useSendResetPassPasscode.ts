import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSendResetPassPasscode= () => {
    const axios = httpAxios();
    const navigate = useNavigate();

    const sendCodeForResetPass = (passcode: string) => axios.post('/auth/resetpass-verify', {passcode});
    const {mutate, isLoading} = useMutation({
        mutationFn: sendCodeForResetPass,
        onSuccess: () => {
            toast.success(`User verified successfully!`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/reset-password');
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