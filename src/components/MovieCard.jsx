import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Poster404 from "../assets/images/poster404.jpg";
import IMDB from "../assets/svg/imdb.svg";
import Tomato from "../assets/svg/tomato.svg";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

export default function MovieCard({
  backdrop_path,
  id,
  original_title,
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
  genres,
}) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const movieGenres = [];
  genre_ids.forEach((id) => {
    const genre = genres.find((item) => item.id == id);
    movieGenres.push(genre?.name);
  });
  const handleNavigate = () => {
    navigate(`/movie/${id}`);
  };
  const handleFavorite = (e) => {
    e.stopPropagation();
    setFavorite((prev) => !prev);
  };
  return (
    <div
      className="flex flex-col gap-[0.75rem] md:w-[45%] lg:w-[14rem] relative cursor-pointer"
      onClick={handleNavigate}
      data-testid="movie-card"
    >
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Poster404}
        alt={title}
        className=" w-full object-cover h-[23.125rem]"
        data-testid="movie-poster"
      />

      <div className="text-greyText flex font-[700] text-[0.75rem] items-center">
        <p data-testid="movie-release-date">Release Date: {release_date}</p>

        <span className="ml-auto text-xl p-1 text-rose" onClick={handleFavorite}>
          {favorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </span>
      </div>
      <h4 className="text-[1.125rem] font-[700] " data-testid="movie-title">
        {title}
      </h4>
      <div className="flex items-center text-[0.75rem] gap-6">
        <span className="flex gap-[10px]">
          <img src={IMDB} alt="" />
          <p>{vote_average * 10} / 100</p>
        </span>
        <span className="flex gap-[10px]">
          <img src={Tomato} alt="" className="ml-auto" />
          <p>{vote_average * 10 + 5}%</p>
        </span>
      </div>
      <p className="text-greyText text-[0.75rem] font-[700]"> {...movieGenres.join(", ")}</p>
    </div>
  );
}
