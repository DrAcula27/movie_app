import React from "react";

const DisplayMovie = (props) => {
  let { searchedMovie, movieArray, setMovieArray } = props;

  const returnMovieJSX = () => {
    if (searchedMovie !== null) {
      return (
        <div>
          <h3>Movie Display</h3>
          <h4>{searchedMovie.Title}</h4>
          <p>{searchedMovie.Plot}</p>
          {searchedMovie.Poster.toLowerCase() === "n/a" ? (
            <img
              src="https://via.placeholder.com/500x90/ccc/000?text=Movie+Poster+Not+Available"
              alt="Movie Poster Placeholder"
            />
          ) : (
            <img src={searchedMovie.Poster} alt="Movie Poster" />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <h3>Movie Display</h3>
          <p>Please search for a movie to see it displayed here.</p>
        </div>
      );
    }
  };

  const handleClick = () => {
    setMovieArray([...movieArray, searchedMovie.Title]);
  };

  return (
    <section
      style={{
        borderBottom: "4px solid black",
        marginBottom: "20px",
        paddingBottom: "12px",
      }}
      onClick={() => handleClick()}
    >
      {returnMovieJSX()}
    </section>
  );
};

export default DisplayMovie;
