import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";
import { useAppDispatch } from "../../redux/hooks";
import { setSize } from "../../redux/slices/media.slice";
import { IMedia } from "../../constant/interfaces";

const useGetMedias = () => {
    const axios = httpAxios();
    const getMedias = () => axios.get('/media');
    const {data, error, isLoading} = useQuery({
        queryKey: ['getMedias'],
        queryFn: getMedias,
        suspense: true
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const totalSize = data?.data.reduce((accumulator: any, currentValue: any) => {
        return accumulator + currentValue.size;
    }, 0);
    const dispatch = useAppDispatch();
    dispatch(setSize(totalSize))
    return {medias: data?.data as IMedia[], error: error, isLoading: isLoading};
}

export default useGetMedias;