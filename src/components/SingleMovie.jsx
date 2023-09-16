import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Poster404 from "../assets/images/poster404.jpg";
import { BsStarFill } from "react-icons/bs";
import NoMovie from "../assets/svg/movie-not-found.svg";

import { Loader } from "../components";

export default function SingleMovie() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [movieId]);
  const handleReleaseDate = (movieDate) => {
    const newDate = new Date(movieDate);
    return newDate.toUTCString();
  };

  if (!movie && loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!movie && !loading) {
    return (
      <div className="relative">
        <div className="h-[30rem] relative">
          <img src={NoMovie} alt="404 page" className="h-full w-full" />
        </div>
        <p className="text-center text-[1.2rem]">Movie not found</p>
      </div>
    );
  }
  return (
    <section>
      <div className="px-2 md:px-4 py-8">
        <div className="h-[23.125rem] relative  rounded-2xl overflow-hidden">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`
                : Poster404
            }
            alt={movie.title}
            className="h-full w-full object-cover"
            data-testid="movie-poster"
          />
        </div>
        <div className="flex flex-col items-start lg:items-center gap-2 lg:flex-row mt-[2.12rem]">
          <ul className="flex flex-col lg:flex-row gap-2 md:gap-4 font-[600] md:text-[1.2rem]">
            <p data-testid="movie-title">{movie.title}</p>
            <li data-testid="movie-release-date">{handleReleaseDate(movie.release_date)}</li>
            <li>PG-13</li>
            <li data-testid="movie-runtime">{movie.runtime} minutes</li>
          </ul>
          <div>
            {movie.genres.map((genre) => {
              return (
                <span
                  key={genre.id}
                  className="mx-2 text-rose border border-[#F8E7EB] px-2 py-1 rounded-[0.9375rem] text-[0.9rem]"
                >
                  {genre.name}
                </span>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className=" text-[#facc15] text-lg">
              <BsStarFill />
            </span>
            <p className="flex items-center gap-2">
              <span className="text-greyText">{Math.round(movie.vote_average)}</span> |
              <span>{movie.vote_count}k</span>
            </p>
          </div>
        </div>
        <p className="mt-[1.56rem]" data-testid="movie-overview">
          {movie.overview}
        </p>
      </div>
    </section>
  );
}
