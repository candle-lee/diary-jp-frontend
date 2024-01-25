import { httpAxios } from "../instance"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useVideoUpload = () => {
    const axios = httpAxios();
    const uploadVideo = (formData :any) => axios.post('/media', formData);
    const queryClient = useQueryClient()
    const {mutate, isLoading} = useMutation({
        mutationFn: uploadVideo,
        onSuccess: ({data}) => {
            toast.success(`${data['message']}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
                className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur"
            });
            queryClient.invalidateQueries({ queryKey: ['getMedias'] })
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
    return {mutate, isLoading}
}

export default useVideoUpload;