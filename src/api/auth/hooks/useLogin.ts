import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogin } from "../../../constant/interfaces";

export const useLoginUser = () => {
    const axios = httpAxios();
    const navigate = useNavigate();

    const loginUser = (formData: ILogin) => axios.post('/auth/login', {...formData});

    const {mutate, isLoading} = useMutation({
        mutationFn: loginUser,
        onSuccess: () => {
            toast.success(`Credentials are correct!`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/signin-validation');
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