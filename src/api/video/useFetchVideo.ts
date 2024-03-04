import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";

const useFetchVideo = (mediaId: string | undefined) => {
  const axios = httpAxios();

  const fetchVideo = async (mediaId: string | undefined) => {
    const response = await axios.get(`/media/${mediaId}/play`, {
      responseType: "blob",
    });
    return response.data;
  };

  const { data, isLoading, error } = useQuery(
    ["fetchVideo", mediaId],
    () => fetchVideo(mediaId),
    { suspense: true, refetchOnWindowFocus: false, enabled: !!mediaId }
  );

  return { data, isLoading, error };
};

export default useFetchVideo;
