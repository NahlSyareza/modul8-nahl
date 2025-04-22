import { useNavigate } from "react-router-dom";
import SBDLogo from "../assets/SBDLogo.svg";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-slate-700 w-screen h-screen font-jetbrains overflow-y-auto overflow-x-hidden">
        <div className="bg-slate-800 w-screen h-20 flex justify-center">
          <img src={SBDLogo} />
          <div className="text-white my-auto ml-5">SBD Class</div>
        </div>
        <div className="flex-col justify-items-center mt-16 text-white">
          <p className="text-xl font-bold m-2">"Class Overview"</p>
          <p className="w-3/4 text-justify">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
        <div className="mt-16 grid justify-items-center">
          <p className="text-xl font-bold text-white">"Modules Overview"</p>
          <div className="h-20 w-3/6 bg-green-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 1 - Completed</p>
          </div>
          <div className="h-20 w-3/6 bg-green-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 2 - Completed</p>
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
          <div className="h-20 w-3/6 bg-yellow-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 7 - Not Yet Started</p>
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
