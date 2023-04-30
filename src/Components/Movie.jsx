function Movie({ title, price, genre }) {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <p>{price}</p>
      <p className="genre">{genre}</p>
    </div>
  );
}

export default Movie;
