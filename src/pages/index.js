import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import GenreButton from "../components/GenreButton";

import styles from "../styles/Home.module.css"

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Children",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Fantasy",
  "Horror",
  "IMAX",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War",
];

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch("/api/movies");
      const data = await res.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  const filteredMovies =
    selectedGenre === "All" ? movies : movies.filter((movie) => movie.genre.includes(selectedGenre));

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <h1 className={styles.pageTitle}>Movies</h1>
      <h2 className={styles.genreHeading}>Genres</h2>
      <div className={styles.genreButtons}>
      {genres.map((genre) => (
          <GenreButton
            key={genre}
            genre={genre}
            onClick={handleGenreClick}
            active={selectedGenre === genre}
          />
        ))}
        <GenreButton
          genre="All"
          onClick={() => setSelectedGenre("All")}
          active={selectedGenre === "All"}
        />
      </div>
      {selectedGenre && (
        <>
          <h2 className={styles.movieListHeader}>
            {selectedGenre === "All" ? "All Movies" : `${selectedGenre} Movies`}
          </h2>
          <MovieList movies={filteredMovies} />
        </>
      )}
    </div>
  );
}
