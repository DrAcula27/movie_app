import React from "react";

const FavoriteMovies = (props) => {
  let { movieArray } = props;
  let arrayJSX = movieArray.map((title, titleIndex) => {
    return <li key={titleIndex}>{title}</li>;
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
