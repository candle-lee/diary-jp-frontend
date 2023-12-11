import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";
import { useAppDispatch } from "../../redux/hooks";
import { setSize } from "../../redux/slices/media.slice";

const useGetMedias = () => {
    const axios = httpAxios();
    const getMedias = () => axios.get('/media');
    const {data, error, isLoading} = useQuery({
        queryKey: ['getMedias'],
        queryFn: getMedias,
        suspense: true
    });
    const totalSize = data?.data.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue.size;
    }, 0);
    const dispatch = useAppDispatch();
    dispatch(setSize(totalSize))
    return {medias: data?.data, error: error, isLoading: isLoading};
}

export default useGetMedias;