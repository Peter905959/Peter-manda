import React from "react";
import { useLocation } from "react-router-dom";
import "./VideoPlayer.css"; // (Optional: external styles)

function VideoPlayer() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const file = queryParams.get("file");
  const youtubeId = queryParams.get("youtube");
  const videoTitleParam = queryParams.get("title");

  // Handle video title and remove file extension for local videos
  let videoTitle = "";
  if (file) {
    videoTitle = decodeURIComponent(file).replace(/\.(mp4|mov|avi|mkv)$/i, "");
  } else if (youtubeId && videoTitleParam) {
    videoTitle = decodeURIComponent(videoTitleParam);
  } else if (youtubeId) {
    videoTitle = "Shot and Edited by Peter!";
  }

  return (
    <div className="video-container">
      <h2 className="video-title">{videoTitle || "No Video"}</h2>

      {youtubeId ? (
        <div className="video-wrapper">
          <iframe
            className="responsive-video"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            frameBorder="0"
            allowFullScreen
            title={videoTitle}
          ></iframe>
        </div>
      ) : file ? (
        <video className="responsive-video" controls autoPlay>
          <source src={`/videos/${file}`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video available</p>
      )}
    </div>
  );
}

export default VideoPlayer;
