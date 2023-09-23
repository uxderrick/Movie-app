import { useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=3506be6b";

const movie1 = {
  "Title": "The Matrix",
  "Year": "1999",
  "imdbID": "tt0133093",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
};

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
            value="Matrix"
            onChange={() => {}}
          ></input>

          <img
            src="src/assets/search.svg"
            alt="Search"
            onClick={() => {}}
          ></img>
        </div>

        <div className="container">
          <div className="movie">
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img
                src={
                  movie1.Poster !== "N/A"
                    ? movie1.Poster
                    : "http://via.placeholder.com/400"
                }
                alt={movie1.Title}
              ></img>
            </div>

            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
