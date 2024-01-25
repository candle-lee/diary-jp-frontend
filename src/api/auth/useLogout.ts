import { toast } from "react-toastify";
import { removeTokenFromLocalStorate } from "../../utils/storage"

const useLogout = () => {
    return ()=>{
    const isSuccess = removeTokenFromLocalStorate();
    if (isSuccess) {
        toast.success(`User has logged out successfully.`, {
            hideProgressBar: true,
            autoClose: 5000,
            type: "success",
            position: "top-right",
            className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur"
        });
    } else {
        toast.error(`Error appeared during logging out.`, {
            hideProgressBar: true,
            autoClose: 5000,
            type: "success",
            position: "top-right",
            className: "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur"
        });
    }}
}

export default useLogout;