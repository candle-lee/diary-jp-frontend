import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";

const useGetMedias = () => {
    const axios = httpAxios();
    const getMedias = () => axios.get('/media');
    const {data, error, isLoading} = useQuery({
        queryKey: ['getMedias'],
        queryFn: getMedias,
    });
    return {medias: data?.data, error: error, isLoading: isLoading};
}

export default useGetMedias;