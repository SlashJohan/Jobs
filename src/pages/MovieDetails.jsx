import movie from "./movie.json";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const imageUrl = "https://www.philosophica.info/voces/platon/Platon.jpg" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img src={imageUrl} alt={movie.title} />
      <div>
        <p>
          <strong>Title:</strong> {movie.title}
          </p>
          <p>
            {movie.genres.map(genre => genre.name)}
          </p>
        <p>
          <strong>Description:</strong>{movie.overview}
          </p>
      </div>
    </div>
  );
}
