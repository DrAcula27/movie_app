import React from "react";

const DisplayMovie = (props) => {
  let { searchedMovie } = props;

  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div>
          <h3>Movie Display</h3>
          <h4>{searchedMovie.Title}</h4>
          <p>{searchedMovie.Plot}</p>
          <img src={searchedMovie.Poster} alt="Movie Poster" />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Movie Display</h3>
          <p>Please search for a movie.</p>
        </div>
      );
    }
  };

  return <section>{returnMovieJSX()}</section>;
};

export default DisplayMovie;
