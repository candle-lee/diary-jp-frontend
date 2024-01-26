import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSendResetPassPasscode= () => {
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
                className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur"
            });
            navigate('/reset-password');
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

    return {mutate, isLoading}
}

export default useSendResetPassPasscode;