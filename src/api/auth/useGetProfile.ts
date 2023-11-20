import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance"

const useGetProfile = () => {
    const axios = httpAxios();
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

export default useGetProfile;