import React from "react";

const FavoriteMovies = (props) => {
  let { movieArray } = props;

  let arrayJSX = movieArray.map((title, index) => {
    return <li key={index}>{title}</li>;
  });

  return (
    <section
      style={{
        marginBottom: "50px",
      }}
    >
      <h3>Your Favorite Movies</h3>
      <ul>{arrayJSX}</ul>
    </section>
  );
};

export default FavoriteMovies;
