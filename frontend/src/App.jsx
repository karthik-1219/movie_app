import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_MOVIE_API_URL || "http://localhost:5000";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("Loading movies...");

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then((response) => {
        if (!response.ok) throw new Error("Movie service unavailable");
        return response.json();
      })
      .then(({ movies: loadedMovies }) => {
        setMovies(loadedMovies);
        setStatus(`${loadedMovies.length} films in the collection`);
      })
      .catch(() => setStatus("Unable to load movies. Please try again later."));
  }, []);

  return (
    <main className="app-shell">
      <header className="hero">
        <p className="eyebrow">MOVIE PICTURE / COLLECTION 01</p>
        <h1>Stories worth<br /><em>staying for.</em></h1>
        <p className="intro">A small, carefully selected catalog of movies for the moments when you want something memorable.</p>
      </header>
      <section className="catalog" aria-labelledby="catalog-heading">
        <div className="section-heading">
          <h2 id="catalog-heading">Now showing</h2>
          <span>{status}</span>
        </div>
        <div className="movie-grid">
          {movies.map((movie, index) => (
            <article className="movie-card" key={movie.id}>
              <div className={`poster poster-${index + 1}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div className="movie-details"><h3>{movie.title}</h3><p>Feature film</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
