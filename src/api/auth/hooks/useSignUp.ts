import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export interface ISignUp {
    username: string;
    email: string;
    password: string;
}

export const useSignUpUser = () => {
    const axios = useAxios();
    const navigate = useNavigate();
    const signUpUser = (formData: ISignUp) => axios.post('/users/register', {...formData});

    const {mutate, isLoading, isError, error, data} = useMutation({
        mutationFn: signUpUser,
        onSuccess: () => {
            toast.success(`User registered succesfully`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            navigate('/signin');
        },
        onError: (error) => {
            toast.error(`Server Error: ${error}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "error",
                position: "top-right",
            });
        },
    });

    return {mutate, isLoading, isError, error, data}
}