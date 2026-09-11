import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const movieApiUrl = import.meta.env.VITE_MOVIE_API_URL || "/api/movies";

  useEffect(() => {
    fetch(movieApiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        setMovies(data.movies || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Unable to connect to the backend. Make sure the Flask server is running."
        );
        setLoading(false);
      });
  }, [movieApiUrl]);

  return (
    <div className="app">
      <header className="header">
        <h1>Movie App</h1>
        <p>Discover movies</p>
      </header>

      <main className="container">
        <h2>Movies</h2>

        {loading && <p className="message">Loading movies...</p>}

        {error && <p className="error">{error}</p>}

        {!loading && !error && movies.length === 0 && (
          <p className="message">No movies found.</p>
        )}

        <div className="movie-grid">
          {movies.map((movie, index) => (
            <article className="movie-card" key={movie.id || index}>
              <div className="movie-content">
                <h3>{movie.title}</h3>

                {movie.year && <p>Year: {movie.year}</p>}

                {movie.genre && <p>Genre: {movie.genre}</p>}

                {movie.description && (
                  <p className="description">{movie.description}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;