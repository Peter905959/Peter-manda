import { useNavigate } from "react-router-dom";

function FilmCard({ title, image }) {
  const navigate = useNavigate();

  return (
    <div
      className="film-card"
      onClick={() => navigate(`/video/${encodeURIComponent(title)}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="img-wrapper">
        <img src={image} alt={title} />
      </div>
      <button className="film-title">{title}</button>
    </div>
  );
}

export default FilmCard;
