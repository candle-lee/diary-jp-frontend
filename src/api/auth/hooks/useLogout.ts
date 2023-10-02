import { toast } from "react-toastify";
import { removeTokenFromLocalStorate } from "../../../utils/storage"

export const useLogout = () => {
    return ()=>{
    const isSuccess = removeTokenFromLocalStorate();
    if (isSuccess) {
        toast.success(`User has logged out successfully.`, {
            hideProgressBar: true,
            autoClose: 5000,
            type: "success",
            position: "top-right",
        });
    } else {
        toast.error(`Error appeared during logging out.`, {
            hideProgressBar: true,
            autoClose: 5000,
            type: "success",
            position: "top-right",
        });
    }}
}