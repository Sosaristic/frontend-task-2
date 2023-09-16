import { useNavigate } from "react-router-dom";
import Error from "./assets/svg/404.svg";

export default function InvalidPage() {
  const navigate = useNavigate();
  return (
    <main className="relative flex flex-col">
      <div className="h-[30rem] relative">
        <img src={Error} alt="404 page" className="h-full w-full" />
      </div>
      <button
        className="bg-rose text-white rounded-md w-fit px-6 py-2 text-center mx-auto"
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </main>
  );
}
