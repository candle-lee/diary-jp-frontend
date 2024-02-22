import { useQuery } from '@tanstack/react-query';
import { httpAxios } from '../instance';

export const useVideoInfo = (mediaId: string | undefined) => {
    console.log(mediaId);
  const axios = httpAxios();

  // Correctly defined fetch function inside the hook
  const fetchVideoInfo = async () => {
    // Extract mediaId from queryKey
    const response = await axios.get(`/media/${mediaId}`);
    return response.data;
  };

  // Correct usage of useQuery with queryKey and queryFn
  const { data, error, isLoading } = useQuery({
    queryKey: ['videoInfo', mediaId], // Correctly structured queryKey
    queryFn: fetchVideoInfo,
    enabled: !!mediaId, // Ensures the query runs only if mediaId is truthy
    suspense: true, // Enables the use of Suspense
  });

  return {
    data,
    error: error, // Optional chaining in case error is undefined
    isLoading,
  };
};
