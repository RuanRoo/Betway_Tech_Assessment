import styles from "../styles/GenreButton.module.css";

export default function GenreButton({ genre, onClick, active, className }) {
  return (
    <button
      className={`${styles.genreButton} ${active ? styles.activeGenreButton : ""} ${className}`}
      onClick={() => onClick(genre)}
    >
      {genre}
    </button>
  );
}