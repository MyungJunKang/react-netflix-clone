import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import cn from "classnames";
import { getNowPlaying, getMovieDetail } from "../../Services/MovieService";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const getMovie = await getNowPlaying();
    const movieId =
      getMovie.data.results[
        Math.floor(Math.random() * getMovie.data.results.length)
      ].id;
    const { data: videoData } = await getMovieDetail(movieId);
    setMovie(videoData);
  };

  const truncate = (str, number) => {
    return str?.length > number ? str.length(0, number - 1) + "..." : str;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className={styles.bannerContents}>
        <h1 className={styles.bannerTitle}>
          {movie.title || movie.name || movie.original}
        </h1>
        <div className={styles.bannerButton}>
          <button className={cn(styles.btn, styles.play)}>Play</button>
          <button className={cn(styles.btn, styles.info)}>Info</button>
        </div>
        <div className={styles.bannerDescription}>
          {truncate(movie.overview, 100)}
        </div>
        <div className={styles.bannerFadeBottom} />
      </div>
    </div>
  );
};

export default Banner;
