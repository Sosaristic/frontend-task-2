import IMBD from "../assets/svg/imdb.svg";
import Tomato from "../assets/svg/tomato.svg";
import { BiPlay } from "react-icons/bi";

export default function BanneText() {
  return (
    <div className="mt-[4.87rem] text-white md:w-[25.25rem] flex flex-col gap-4">
      <h2 className=" text-[2.5rem] lg:text-[3rem] font-[700] leading-[3.5rem]">
        John Wick 3 : <br /> Parabellum
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center text-[0.75rem] gap-6">
          <span className="flex gap-[10px]">
            <img src={IMBD} alt="" />
            <p>86.0 / 100</p>
          </span>
          <span className="flex gap-[10px]">
            <img src={Tomato} alt="" className="ml-auto" />
            <p>97%</p>
          </span>
        </div>
        <p className="font-[500] text-[0.875rem]">
          John Wick is on the run after killing a member of the international assassins &apos;
          guild, and with a $14 million price tag on his head, he is the target of hit men and women
          everywhere.
        </p>
      </div>
      <button className="flex text-white bg-rose w-fit px-[16px] py-[6px] gap-[8px] rounded-[6px]">
        <span className="text-rose text-[1rem] bg-white h-[1.25rem] w-[1.25rem] flex items-center justify-center rounded-full">
          <BiPlay />
        </span>
        WATCH TRAILER
      </button>
    </div>
  );
}
