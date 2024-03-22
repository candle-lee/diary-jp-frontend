/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import { httpAxios } from "../instance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../../utils/storage";
import { setAutherStatus } from "../../redux/slices/auth.slice";
import { useAppDispatch } from "../../redux/hooks";

const useGoogleSignup = () => {
  const axios = httpAxios();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const googleSignup = (data: any) =>
    axios.post("/user/google-register", { data });

  const { mutate, isLoading } = useMutation({
    mutationFn: googleSignup,
    onSuccess: ({ data }) => {
      toast.success(`Success!`, {
        hideProgressBar: true,
        autoClose: 5000,
        type: "success",
        position: "top-right",
        className:
          "p-4 text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] rounded-lg border border-solid border-white border-opacity-40 bg-white bg-opacity-10 backdrop-blur",
      });
      setTokenToLocalStorage(data);
      dispatch(setAutherStatus(true));
      navigate("/video-list");
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

  return { mutate, isLoading };
};

export default useGoogleSignup;
