import "./App.css";
import { useState } from "react";
import Header from "./components/header";
import Search from "./components/search";
import DisplayMovie from "./components/display_movie";
import FavoriteMovies from "./components/favorite_movies";

function App() {
  const [searchedMovie, setSearchedMovie] = useState(null);
  const [movieArray, setMovieArray] = useState([]);

  return (
    <div className="App">
      <Header />
      <Search setSearchedMovie={setSearchedMovie} />
      <DisplayMovie
        searchedMovie={searchedMovie}
        setMovieArray={setMovieArray}
        movieArray={movieArray}
      />
      <FavoriteMovies movieArray={movieArray} />
    </div>
  );
}

export default App;
