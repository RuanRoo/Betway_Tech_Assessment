import Movie from "./Movie";

function MovieList({ movies }) {
    return (
      <div className="container">
        {movies.map((movie) => (
          <Movie key={movie.id} title={movie.movie_title} price={movie.price} genre={movie.genre} />
        ))}
      </div>
    );
  }

  export default MovieList