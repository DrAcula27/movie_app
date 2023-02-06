import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = (props) => {
  let { setSearchedMovie } = props;
  const [searchString, setSearchString] = useState("");

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const moviesArray = [
      "The Departed",
      "Good Will Hunting",
      "Inception",
      "Interstellar",
      "The Dark Knight Rises",
      "The Dark Knight",
      "The Sting",
      "La Grande Vadrouille",
      "Lost In Translation",
      "Notting Hill",
    ];
    let chosenMovie = getRandomIntInclusive(0, 9);
    makeServerCall(moviesArray[chosenMovie]);
  }, []);

  const handleChange = (e) => {
    let newValue = e.target.value;
    setSearchString(newValue);
  };

  const makeServerCall = async (string) => {
    let serverResponse = await axios({
      method: "GET",
      url: `http://localhost:5000/get_movie/${string}`,
    });
    setSearchedMovie(serverResponse.data);
    setSearchString("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    makeServerCall(searchString);
  };

  return (
    <section
      style={{
        borderBottom: "4px solid black",
        marginBottom: "20px",
        paddingBottom: "12px",
      }}
    >
      <form onSubmit={(event) => handleSubmit(event)}>
        <h3>Search</h3>
        <label htmlFor="movie-search">Search for a movie: </label>
        <input
          type="search"
          name="movie-search"
          id="movie-search"
          placeholder="movie title"
          value={searchString}
          onChange={(event) => handleChange(event)}
        />
        <button>Search</button>
      </form>
    </section>
  );
};

export default Search;
