import SideNav from "./components/SideNav.jsx";
import SingleMovie from "./components/SingleMovie.jsx";

export default function MoviePage() {
  return (
    <main className="flex min-h-screen min-w-full relative font-poppins">
      <SideNav />
      <div className="min-w-[70%] flex-1">
        <SingleMovie />
      </div>
    </main>
  );
}
