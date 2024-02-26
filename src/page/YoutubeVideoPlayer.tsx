import { useParams } from "react-router-dom";

const YoutubeVideoPlayer = () => {
  const { id } = useParams();

  return (
    <div className="flex justify-center items-center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; 
            autoplay; 
            clipboard-write; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share"
        allowFullScreen
        className="w-[1000px] h-96"
      ></iframe>
    </div>
  );
};

export default YoutubeVideoPlayer;
