import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";

export const useGetMedias = () => {
    const axios = httpAxios();
    const getMedias = () => axios.get('/media');
    const {data, error, isLoading} = useQuery({
        queryKey: ['getMedias'],
        queryFn: getMedias,
    });
    return {medias: data?.data, error: error, isLoading: isLoading};
}