import React from "react";
import { getValue } from "../utils/object";
import { useGetAllYoutubeVideos } from "../hooks/youtubeApi.hooks";

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    thumbnails: {
      high: {
        url: string;
      };
    };
    title: string;
  };
}

interface Props {
  searchQuery: string;
}

const Home: React.FC<Props> = ({ searchQuery }: Props) => {
  const { data: searchResult } = useGetAllYoutubeVideos(searchQuery);

  const onVideoClick = (videoId: string) => {
    const externalUrl = `http://localhost:5173/video-player/${videoId}`;
    window.open(externalUrl, "_blank");
  };


  return (
    <>
      <div className="relative  overflow-hidden bg-cover bg-no-repeat  grid grid-cols-1 sm:grid-cols-3 md:grid-cols- lg:grid-cols-4 gap-5 w-full">
        {searchResult?.map((data: Video, index: number) => (
          <div
            className="flex flex-col cursor-pointer"
            onClick={() => onVideoClick(getValue(data, "id.videoId"))}
            key={getValue(data, "id.videoId", index)}
          >
            <div className="w-full">
              <img
                src={getValue(data, "snippet.thumbnails.high.url")}
                alt="youtube-videos"
                className="rounded-xl hover:rounded-none hover:cursor-pointer w-full "
              />
            </div>

            <div className="text-white font-medium py-2 text-xs md:text-sm">
              {getValue(data, "snippet.title")}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
