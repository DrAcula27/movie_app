import React from "react";

const FavoriteMovies = (props) => {
  let { movieArray, searchedMovie } = props;

  let arrayJSX = movieArray.map((title) => {
    return <li key={searchedMovie.imdbID}>{title}</li>;
  });

  return (
    <section
      style={{
        marginBottom: "50px",
      }}
    >
      <h3>Favorite Movies</h3>
      <ul>{arrayJSX}</ul>
    </section>
  );
};

export default FavoriteMovies;
