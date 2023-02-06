import "./App.css";
import { useState } from "react";
import Search from "./components/search";
import DisplayMovie from "./components/display_movie";
import Header from "./components/header";

function App() {
  const [searchedMovie, setSearchedMovie] = useState(null);

  return (
    <div className="App">
      <Header />
      <Search setSearchedMovie={setSearchedMovie} />
      <DisplayMovie searchedMovie={searchedMovie} />
    </div>
  );
}

export default App;
