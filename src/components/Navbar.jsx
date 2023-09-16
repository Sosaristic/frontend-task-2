import { useEffect, useState } from "react";
import axios from "axios";
import Tv from "../assets/svg/tv.svg";
import Menu from "../assets/svg/Menu.svg";
import { MdSearch } from "react-icons/md";
import SearchComponent from "./SearchComponent";
import { Spinner } from "./Loader";
import { toast } from "react-toastify";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchedData, setSearchedData] = useState([]);
  const [status, setStatus] = useState(null);
  useEffect(() => {
    let debounce;
    if (search.length > 1) {
      setLoading(true);
      debounce = setTimeout(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
              import.meta.env.VITE_API_KEY
            }&query=${search}&page=1`
          )
          .then((response) => {
            console.log(response);
            setSearchedData(response.data.results);
            setStatus(response.status);
          })
          .catch((err) => toast.error(err.message))
          .finally(() => setLoading(false));
      }, 1000);
    } else {
      setLoading(false);
      setSearchedData([]);
    }

    return () => clearTimeout(debounce);
  }, [search]);

  return (
    <nav className=" text-white relative h-[5rem] gap-1 w-full items-center justify-between flex">
      <div className="flex items-center gap-2 lg:gap-[24px]">
        <img src={Tv} alt="" />
        <p className=" lg:text-[1.5rem] hidden md:block font-[700]">MovieBox</p>
      </div>
      <div className="flex relative bg-transparent border-2 items-center flex-1 md:flex-none md:w-[40%] px-[10px] py-[6px] rounded-[6px]">
        <input
          type="text"
          className="bg-transparent w-[80%] text-sm outline-none"
          placeholder="What do you want to watch?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="ml-auto text-xl">{loading ? <Spinner /> : <MdSearch />}</span>
        {search && (
          <div className="absolute top-10 bg-white shadow-2xl max-h-[16rem] overflow-auto w-full left-0 rounded-md">
            <SearchComponent searcheddata={searchedData} loading={loading} status={status} />
          </div>
        )}
      </div>
      {/* <span className="ml-auto text-2xl md:hidden">
        <MdSearch />
      </span> */}
      <div className="flex  gap-2 lg:gap-[1.688rem]">
        <button className="hidden md:block">Sign in</button>
        <img src={Menu} alt="" />
      </div>
    </nav>
  );
}
