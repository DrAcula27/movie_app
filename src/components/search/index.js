import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Search = (props) => {
  let { setSearchedMovie } = props;
  const [searchString, setSearchString] = useState("");

  let isFirstRender = useRef(true);

  useEffect(() => {
    const movieNames = [
      "Pulp Fiction",
      "Reservoir Dogs",
      "Django Unchained",
      "Kill Bill: Vol. 2",
      "Inglourious Basterds",
      "Kill Bill: Vol. 1",
      "Death Proof",
      "Jackie Brown",
      "Life of Brian",
      "Monty Python and The Holy Grail",
    ];
    if (isFirstRender.current === true) {
      isFirstRender.current = false;
      makeServerCall(movieNames[Math.floor(Math.random() * movieNames.length)]);
    }
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
