import React from "react";
import "./Movie.css";
const IMAGES_API = "https://image.tmdb.org/t/p/w1280";
const setVoteClass = (vote) => {
  if (vote >= 8) {
    return "text-success";
  } else if (vote >= 6) {
    return "text-warning";
  } else {
    return "text-danger";
  }
};
function Movie({ title, poster_path, overview, vote_average }) {
  return (
    <div className="card mb-5 rounded  shadow">
      <img
        alt={title}
        src={
          poster_path
            ? IMAGES_API + poster_path
            : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80"
        }
      />
      <div className="movie-info text-light">
        <h5>{title}</h5>
        <span
          className={`p-2 rounded ${setVoteClass(vote_average)}`}
          style={{ background: "#22254b" }}
        >
          {vote_average}
        </span>
      </div>
      <div className="overlay">
        <div className="overview">
          <small>{title}</small>
          <h3 className="text-secondary">Overview:</h3>
          <p> {overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
