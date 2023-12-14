import { httpAxios } from "../instance"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useVideoDelete = () => {
    const axios = httpAxios();
    const uploadDelete = (mediaId : string) => axios.delete(`/media/${mediaId}`);
    const queryClient = useQueryClient()
    const {mutate, isLoading} = useMutation({
        mutationFn: uploadDelete,
        onSuccess: ({data}) => {
            toast.success(`${data['message']}`, {
                hideProgressBar: true,
                autoClose: 5000,
                type: "success",
                position: "top-right",
            });
            queryClient.invalidateQueries({ queryKey: ['getMedias'] })
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

export default useVideoDelete;