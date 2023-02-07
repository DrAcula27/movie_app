import React, { useState } from "react";
import Search from "../../components/search";
import DisplayMovie from "../../components/display_movie";
import FavoriteMovies from "../../components/favorite_movies";
import Header from "../../components/header";
import MovieRatings from "../../components/movie_ratings";

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
      <MovieRatings searchedMovie={searchedMovie} />
      <FavoriteMovies searchedMovie={searchedMovie} movieArray={movieArray} />
    </div>
  );
};

export default MoviePage;
