import React from "react";
import Movie from "./Movie";
function Movies({ movies }) {
  return (
    <div className="row">
      {movies.length > 0 &&
        movies.map((m) => (
          <div key={m.id} className="col-md-3">
            <Movie {...m} />
          </div>
        ))}
    </div>
  );
}

export default Movies;
