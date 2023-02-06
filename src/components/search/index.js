import React, { useState } from "react";

const Search = () => {
  const [searchString, setSearchString] = useState("");
  const handleChange = (e) => {
    console.dir(e.target.value);
    setSearchString(e.target.value);
  };

  return (
    <section
      style={{
        borderBottom: "4px solid black",
        marginBottom: "20px",
        paddingBottom: "12px",
      }}
    >
      <form>
        <h3>Search</h3>
        <label for="movie-search">Search for a movie: </label>
        <input
          type="search"
          name="movie-search"
          id="movie-search"
          placeholder="movie title"
          value={searchString}
          onChange={(event) => handleChange(event)}
        />
      </form>
    </section>
  );
};

export default Search;
