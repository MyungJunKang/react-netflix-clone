import React, { useEffect, useState } from "react";
import styles from "./Banner.module.scss";
import cn from "classnames";
import { getNowPlaying, getMovieDetail } from "../../Services/MovieService";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const fetchData = async () => {
    const getMovie = await getNowPlaying();
    console.log(getMovie);
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
      {!isClick ? (
        <div className={styles.bannerContents}>
          <h1 className={styles.bannerTitle}>
            {movie.title || movie.name || movie.original}
          </h1>
          <div className={styles.bannerButton}>
            <button
              className={cn(styles.btn, styles.play)}
              onClick={() => setIsClick(true)}
            >
              Play
            </button>
            <button className={cn(styles.btn, styles.info)}>Info</button>
          </div>
          <div className={styles.bannerDescription}>
            {truncate(movie.overview, 100)}
          </div>
          <div className={styles.bannerFadeBottom} />
        </div>
      ) : (
        <div className={styles.videoWrapper}>
          <div className={styles.container}>
            {movie.videos.results[0].key ? (
              <>
                <iframe
                  id={movie.id}
                  title={movie.title || movie.name || movie.original}
                  className={styles.iframe}
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
                  allow="autoplay;"
                  allowFullScreen
                ></iframe>
              </>
            ) : (
              <div>비디오가 없습니다</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
