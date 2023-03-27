import styles from "./MovieCard.module.css"


function MovieCard ({ movie }) {
    const imageUrl = movie.poster_path 
    return (
    <li className={styles.movieCard}>
        <img 
        width={230}
        height={345}
        className={styles.movieImage} 
        src={imageUrl} 
        alt="{movie.title}" 
        />
        <div>{movie.title}</div>
      </li>
    );
  }

export default MovieCard