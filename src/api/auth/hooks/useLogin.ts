import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILogin } from "../../../constant/interfaces";
import { setTokenToLocalStorage } from "../../../utils/storage";
import { setAutherStatus } from "../../../redux/slices/auth.slice";
import { useAppDispatch } from "../../../redux/hooks";

export const useLoginUser = () => {
    const axios = httpAxios();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const loginUser = (formData: ILogin) => axios.post('/auth/login', {...formData});

    const {mutate, isLoading} = useMutation({
        mutationFn: loginUser,
        onSuccess: ({data}: any) => {
            toast.success(`Credentials are correct!`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            setTokenToLocalStorage(data);
            dispatch(setAutherStatus(true));
            navigate('/main');
        },
        onError: (error: any) => {
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