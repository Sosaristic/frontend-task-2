import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="lg:w-[40%] px-4 mx-auto py-[9rem] flex flex-col gap-[2.25rem]">
      <div className="flex text-[1.5rem] justify-center gap-10">
        <BiLogoFacebookSquare />
        <BsInstagram /> <BsTwitter /> <BsYoutube />
      </div>
      <div className="flex flex-col md:flex-row  gap-2 justify-between text-[1.2rem] font-[700]">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className="self-center md:text-[1.125rem] text-greyText">© 2023 MovieBox by Anderson </p>
    </footer>
  );
}
