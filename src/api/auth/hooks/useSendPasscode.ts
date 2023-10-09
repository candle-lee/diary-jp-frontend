import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSendCode = () => {
    const axios = httpAxios();
    const navigate = useNavigate();

    const sendCode = (passcode: string) => axios.post('/auth/verify', {passcode});
    const {mutate, isLoading} = useMutation({
        mutationFn: sendCode,
        onSuccess: () => {
            toast.success(`User verified successfully!`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            // setTokenToLocalStorage(data);
            // dispatch(setAutherStatus(true));
            navigate('/signin');
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