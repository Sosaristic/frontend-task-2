// import { BiCameraMovie } from "react-icons/ai";
import { MdOutlineHome, MdLogout } from "react-icons/md";
import { RiMovieLine } from "react-icons/ri";
import { BsCalendarMinus } from "react-icons/bs";
import Tv from "../assets/svg/tv.svg";
import { useNavigate } from "react-router-dom";

const sideLinks = [
  {
    name: "Home",
    id: 1,
    icon: <MdOutlineHome />,
  },
  { name: "Movies", id: 2, icon: <RiMovieLine /> },
  { name: "TV Series", id: 3, icon: <RiMovieLine /> },
  { name: "Upcoming", id: 4, icon: <BsCalendarMinus /> },
];

export default function SideNav() {
  const navigate = useNavigate();

  return (
    <aside className="hidden md:flex md:w-[18%] lg:w-[15%] flex-col py-10 border-t border-r rounded-tr-[2rem] rounded-br-[2rem] ">
      <div className="flex items-center gap-2 lg:gap-[24px] px-2">
        <img src={Tv} alt="" />
        <p className=" lg:text-[1.5rem] hidden md:block font-[700]">MovieBox</p>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {sideLinks.map((item) => {
          return (
            <div
              key={item.id}
              className={`flex items-center  ${
                item.id === 2
                  ? "text-rose bg-[#F8E7EB] border-r-4 border-r-rose"
                  : "text-greyText bg-transparent"
              } font-[600] py-4 px-4 gap-2 cursor-pointer`}
              onClick={() => item.id == 1 && navigate("/")}
            >
              <span className="text-greyText text-2xl">{item.icon}</span> {item.name}
            </div>
          );
        })}
      </div>

      <button className="mt-auto flex items-center gap-4 px-4 text-greyText font-[700]">
        <span className="text-2xl">
          <MdLogout />
        </span>
        Logout
      </button>
    </aside>
  );
}
