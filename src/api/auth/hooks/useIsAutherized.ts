import { useAppSelector } from "../../../redux/hooks"

export const useIsAutherized = () => {
    const status = useAppSelector((state) => state.authReducer.isAutherized);
    return status;
}