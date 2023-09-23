import { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=3506be6b";

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Matrix");
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>

        {/* Input field */}
        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter')
              searchMovies(searchTerm)
            }}

          ></input>

          <img
            src="src/assets/search.svg"
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
          ></img>
        </div>

        {
          movies?.length > 0
            ? ( <div className="container">
              {movies.map(((movie) => (
            <MovieCard movie={movie}></MovieCard>

              )))}
          </div>)
          : <div className="empty">
            <h2>No movies found</h2>
          </div>
        } 

       
      </div>
    </>
  );
}

export default App;
