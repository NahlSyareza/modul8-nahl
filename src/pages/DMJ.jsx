import { useNavigate } from "react-router-dom";
import DMJLogo from "../assets/DMJLogo.svg";

export default function App() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-slate-700 w-screen h-screen font-jetbrains overflow-y-auto overflow-x-hidden">
        <div className="bg-slate-800 w-screen h-20 flex justify-center">
          <img src={DMJLogo} />
          <div className="text-white my-auto ml-5">DMJ Class</div>
        </div>
        <div className="flex-col justify-items-center mt-16 text-white">
          <p className="text-xl font-bold m-2">"Class Overview"</p>
          <p className="w-3/4 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
          <div className="h-20 w-3/6 bg-red-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 4 - Failed</p>
          </div>
          <div className="h-20 w-3/6 bg-yellow-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 5 - Not Yet Started</p>
          </div>
          <div className="h-20 w-3/6 bg-yellow-500 rounded-md flex m-2">
            <p className="mx-auto my-auto">Module 6 - Not Yet Started</p>
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
