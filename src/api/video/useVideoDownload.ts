import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";


const useVideoDownload = (mediaId: string | null) => {
  const axios = httpAxios();

  const getMedia = async () => {
    const response = await axios.get<Blob>(`/media/${mediaId}`, {responseType: 'blob'});
    return response.data;
  };

  const { data, error, isLoading } = useQuery<Blob, Error>({
    queryKey: ['getMedia', mediaId],
    queryFn: getMedia,
    enabled: !!mediaId,  // Run the query only if mediaId is provided
  });

  return {
    data,
    error: error?.message,
    isLoading,
  };
};

export default useVideoDownload;