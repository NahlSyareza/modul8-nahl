import { useNavigate } from "react-router-dom";
import OSLogo from "../assets/OSLogo.svg";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-slate-700 w-screen h-screen font-jetbrains overflow-y-auto overflow-x-hidden">
        <div className="bg-slate-800 w-screen h-20 flex justify-center">
          <img src={OSLogo} />
          <div className="text-white my-auto ml-5">OS Class</div>
        </div>
        <div className="flex-col justify-items-center mt-16 text-white">
          <p className="text-xl font-bold m-2">"Class Overview"</p>
          <p className="w-3/4 text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
        </div>
        <div className="mt-16 grid justify-items-center">
          <p className="text-xl font-bold text-white">"Modules Overview"</p>
          <div className="h-20 w-3/6 bg-green-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 1 - Completed</p>
          </div>
          <div className="h-20 w-3/6 bg-red-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 2 - Failed</p>
          </div>
          <div className="h-20 w-3/6 bg-green-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 3 - Completed</p>
          </div>
          <div className="h-20 w-3/6 bg-green-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 5 - Completed</p>
          </div>
          <div className="h-20 w-3/6 bg-green-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 6 - Completed</p>
          </div>
          <div className="h-20 w-3/6 bg-red-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 7 - Failed</p>
          </div>
          <div className="h-20 w-3/6 bg-yellow-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 8 - Not Yet Started</p>
          </div>
          <div className="h-20 w-3/6 bg-yellow-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 9 - Not Yet Started</p>
          </div>
          <div className="h-20 w-3/6 bg-yellow-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">FINAL PROJECT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
