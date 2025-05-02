import { useLocation } from "react-router-dom";

function VideoPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const file = queryParams.get("file");
  const youtubeId = queryParams.get("youtube");

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>{title}</h1>
      {youtubeId ? (
        <div>
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allowFullScreen
            title={title}
          ></iframe>
        </div>
      ) : (
        <video controls width="100%">
          <source src={`/videos/${file}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default VideoPage;
