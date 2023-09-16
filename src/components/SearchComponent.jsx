import { useNavigate } from "react-router-dom";

import Poster404 from "../assets/images/poster404.jpg";

export default function SearchComponent({ searcheddata, loading, status }) {
  const navigate = useNavigate();
  if (searcheddata.length == 0 && !loading && status == 200) {
    return (
      <div className="text-rose h-[6rem] flex items-center justify-center">
        <p>No Movies found</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      {searcheddata.map((item) => {
        return (
          <div
            key={item.id}
            className="flex py-2 px-2 gap-4 rounded-md shadow-md cursor-pointer"
            onClick={() => navigate(`/movie/${item.id}`)}
          >
            <div className="min-w-[4rem] min-h-[4rem] max-h-[4rem] max-w-[4rem] rounded-md overflow-hidden relative">
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                    : Poster404
                }
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="text-greyText flex flex-col justify-between">
              <p className="text-rose font-[700] ">{item.title}</p>
              <p>{item.release_date}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
