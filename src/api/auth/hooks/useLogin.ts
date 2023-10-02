import { useMutation } from "@tanstack/react-query";
import { useAxios } from "../../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogin } from "../../../constant/interfaces";
import { useAppDispatch } from "../../../redux/hooks";
import { setAutherStatus } from "../../../redux/slices/auth.slice";
import { setTokenToLocalStorage } from "../../../utils/storage";

export const useLoginUser = () => {
    const axios = useAxios();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const loginUser = (formData: ILogin) => axios.post('/auth/login', {...formData});

    const {mutate, isLoading} = useMutation({
        mutationFn: loginUser,
        onSuccess: ({data}: any) => {
            toast.success(`User registered succesfully`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            setTokenToLocalStorage(data);
            dispatch(setAutherStatus(true));
            navigate('/');
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