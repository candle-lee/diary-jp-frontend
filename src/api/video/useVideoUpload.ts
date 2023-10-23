import { httpAxios } from "../instance"
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useVideoUpload = () => {
    const axios = httpAxios();

    const uploadVideo = (formData :any) => axios.post('/media', {...formData});

    const {mutate, isLoading} = useMutation({
        mutationFn: uploadVideo,
        onSuccess: ({data}) => {
            toast.success(`${data['message']}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
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