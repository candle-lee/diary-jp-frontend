import { useQuery } from "@tanstack/react-query";
import { useAxios } from "../../instance"

export const useGetProfile = () => {
    const axios = useAxios();
    const getProfile = () => axios.get('/auth/profile');
    const {data} = useQuery({
        queryKey: ['getProfile'],
        queryFn: getProfile,
    });
    const user = {
        username: data?.data.username,
        email: data?.data.email,
    }
    return user;
}