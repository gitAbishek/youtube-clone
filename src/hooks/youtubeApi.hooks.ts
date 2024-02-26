import { useQuery } from "@tanstack/react-query";
import { getApi } from "../api/client";
import { getValue } from "../utils/object";
import { VITE_OPEN_YOUTUBE_API_KEY } from "../config/secret";

const QUERY_KEY = {
  YOUTUBE_VIDEOS: "YOUTUBE_VIDEOS",
};

export const useGetAllYoutubeVideos = (query: string) =>
  useQuery({
    queryKey: [QUERY_KEY.YOUTUBE_VIDEOS, query],
    queryFn: () =>
      getApi({
        url: "v3/search",
        params: {
          part: "snippet",
          key: VITE_OPEN_YOUTUBE_API_KEY,
          maxResults: 10,
          q: query,
        },
      }),
    select: (data) => {
      return getValue(data, "items", []);
    },
    retry: false,
    refetchOnWindowFocus: false,
  });
