import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const [searchedMovie, setSearchedMovie] = useState(null);

  console.log(searchedMovie);

  const handleChange = (e) => {
    let newValue = e.target.value;
    setSearchString(newValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("submitting");

    let serverResponse = await axios({
      method: "GET",
      url: `http://localhost:5000/get_movie/${searchString}`,
    });

    console.log(serverResponse);
    setSearchedMovie(serverResponse.data);
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
