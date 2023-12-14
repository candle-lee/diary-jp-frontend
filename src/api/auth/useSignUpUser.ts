import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ISignUp } from "../../constant/interfaces";

const useSignUpUser = () => {
    const axios = httpAxios();
    const navigate = useNavigate();
    const signUpUser = (formData: ISignUp) => axios.post('/user/register', {...formData});

    const {mutate, isLoading} = useMutation({
        mutationFn: signUpUser,
        onSuccess: ({data}) => {
            toast.success(`${data['message']}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/verify-user');
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

export default useSignUpUser;