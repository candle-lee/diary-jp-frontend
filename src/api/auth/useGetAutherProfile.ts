import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance"
import { useAppDispatch } from "../../redux/hooks";
import { setAuthenticatedUser } from "../../redux/slices/auth.slice";

const useGetAuthProfile = () => {
    const dispatch = useAppDispatch();
    const axios = httpAxios();
    const getProfile = () => axios.get('/auth/profile');
    const {data} = useQuery({
        queryKey: ['getProfile'],
        queryFn: getProfile,
        suspense: true
    });
    const user = {
        username: data?.data.username,
        email: data?.data.email,
    };
    dispatch(setAuthenticatedUser(user));
}

export default useGetAuthProfile;