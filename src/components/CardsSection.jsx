import { useEffect, useState } from "react";

import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import axios from "axios";

export default function CardsSection() {
  const [moviesData, setMoviesData] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=1`
      )
      .then((response) => {
        setMoviesData(response.data.results.splice(0, 10));
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="mt-[4.38rem]  px-4 lg:px-[5rem] ">
      <div className="flex">
        <h2 className="text-black font-[700] text-[1.2rem] lg:text-[2.25rem]">Featured Movie</h2>
        <Link
          to={"#"}
          className="flex items-center ml-auto text-rose text-[.8rem] gap-[8px] hover:underline"
        >
          See more
          <span>
            <MdChevronRight />
          </span>
        </Link>
      </div>
      <div className="mt-[2.75rem] grid grid-cols-2 md:grid-cols-5 gap-8">
        {moviesData.map((item) => {
          return <MovieCard key={item.id} {...item} genres={genres} />;
        })}
      </div>
    </section>
  );
}
