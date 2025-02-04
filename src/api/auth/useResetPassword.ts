import { useNavigate } from "react-router-dom";
import { httpAxios } from "../instance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { IResetPassword } from "../../constant/interfaces";

const useResetPassword = () => {
  const axios = httpAxios();
  const navigate = useNavigate();
  const resetPassword = ({ password, email }: IResetPassword) =>
    axios.post("/auth/reset-password", { password, email });
  const { mutate, isLoading, error } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success(`Password is successfully changed.`, {
        hideProgressBar: true,
        autoClose: 5000,
        type: "success",
        position: "top-right",
        className:
          "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur",
      });
      localStorage.removeItem("email");
      navigate("/signin");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(`Error: ${error?.response?.data?.message}`, {
        hideProgressBar: true,
        autoClose: 5000,
        type: "error",
        position: "top-right",
        className:
          "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur",
      });
    },
  });
  return { mutate, isLoading, error };
};

export default useResetPassword;
