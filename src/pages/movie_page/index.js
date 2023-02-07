import React, { useState } from "react";
import Search from "../../components/search";
import DisplayMovie from "../../components/display_movie";
import FavoriteMovies from "../../components/favorite_movies";
import Header from "../../components/header";

const MoviePage = () => {
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([]);

  return (
    <div>
      <Header />
      <Search setSearchedMovie={setSearchedMovie} />
      <DisplayMovie
        searchedMovie={searchedMovie}
        setMovieArray={setMovieArray}
        movieArray={movieArray}
      />
      {/* add MovieRatings here */}
      <FavoriteMovies movieArray={movieArray} />
    </div>
  );
};

export default MoviePage;
