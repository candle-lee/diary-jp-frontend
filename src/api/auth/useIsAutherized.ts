import { useAppSelector } from "../../redux/hooks"

const useIsAutherized = () => {
    const status = useAppSelector((state) => state.authReducer.isAutherized);
    return status;
}

export default useIsAutherized;