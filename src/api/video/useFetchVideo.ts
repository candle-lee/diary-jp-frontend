import { useQuery } from "@tanstack/react-query";
import { httpAxios } from "../instance";

const useFetchVideo = (mediaId: string) => {
    const axios = httpAxios();

    const fetchVideo = async (mediaId: string) => {
        const response = await axios.get(`/media/${mediaId}/play`, {
          responseType: 'blob',
        });
        return response.data;
      };
    
    return useQuery(['fetchVideo', mediaId], () => fetchVideo(mediaId), {suspense: true, refetchOnWindowFocus: false, enabled: !!mediaId});
}

export default useFetchVideo;