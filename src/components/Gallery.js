import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const navigate = useNavigate();

  const videos = [
    {
      title: "2024 - RECAP",
      file: "2024 - RECAP.MP4",
      thumbnail: "recap.jpg",
    },
    {
      title: "AFTER EFFECTS ANIMATION SAMPLE",
      file: "AFTER EFFECTS ANIMATION SAMPLE.MP4",
      thumbnail: "after-effects.jpg",
    },
    {
      title: "CAR - REEL",
      file: "CAR - REEL.MOV",
      thumbnail: "car-reel.jpg",
    },
    {
      title: "THE BEAUTY OF LADAKH",
      youtubeId: "XUbaRkNZZ8Y", // YouTube ID
      thumbnail: "ladakh.jpg",
    },
    {
      title: "PEACE - FILM",
      youtubeId: "Das3V42o2M8", // YouTube ID
      thumbnail: "peace.jpg",
    },
    {
      title: "LEH - FILM",
      youtubeId: "J4zxKilDbLs", // YouTube ID
      thumbnail: "leh.jpg",
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".film-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="gallery">
      {videos.map((video, index) => (
        <div className="film-card fade-in" key={index}>
          <div className="img-wrapper">
            <img src={`/images/${video.thumbnail}`} alt={video.title} />
          </div>
          <button
            className="film-title"
            onClick={() => {
              const query = video.youtubeId
                ? `?youtube=${video.youtubeId}` // YouTube video
                : `?file=${encodeURIComponent(video.file)}`; // Local video
              navigate(`/video${query}`);
            }}
          >
            {video.title}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
