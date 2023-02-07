import React from "react";

const MovieRatings = (props) => {
  let { searchedMovie } = props;

  const returnLoader = () => {
    return (
      <div>
        <p>Please search for a movie to see its ratings displayed here.</p>
      </div>
    );
  };

  const returnMovieRatings = () => {
    let movieRatingsJSX = searchedMovie.Ratings.map((item, index) => {
      return (
        <div key={index}>
          <h4>{item.Source}</h4>
          <h5>{item.Value}</h5>
        </div>
      );
    });
    return movieRatingsJSX;
  };

  return (
    <section
      style={{
        borderBottom: "4px solid black",
        marginBottom: "20px",
        paddingBottom: "12px",
      }}
    >
      <h3>Movie Ratings</h3>
      {searchedMovie === null ? returnLoader() : returnMovieRatings()}
    </section>
  );
};

export default MovieRatings;
