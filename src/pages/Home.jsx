import Logo from "../assets/Logo.svg";
import SBDLogo from "../assets/SBDLogo.svg";
import OSLogo from "../assets/OSLogo.svg";
import DMJLogo from "../assets/DMJLogo.svg";
import Chamber2 from "../assets/Joint_Venture_Card_Small.webp";

import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  const gender = "male";
  const user = "Nahl Syareza";
  const title = "le Chambre Perfecti";

  return (
    <div>
      <div className="bg-slate-700 w-screen h-screen font-jetbrains">
        <div className="grid">
          <div className="bg-slate-800 w-screen h-20 flex">
            <div className="text-white my-auto mx-auto flex">
              <img src={Chamber2} className="w-10 h-10" />
              <p className="my-auto ml-5 flex">
                Hello! {gender == "male" ? "Monsieur" : "Mademoiselle"} {user}{" "}
                {title}
              </p>
            </div>
          </div>
          <div className="flex justify-center w-screen h-[100px] mt-16 text-white">
            <img src={Logo} className="rounded-[50px]" />
            <p className="ml-5 text-3xl self-center">Welcome to Netlab</p>
          </div>
          <div className="flex text-xl justify-center mt-16 text-white">
            <p>View your classes</p>
          </div>
          <div className="flex justify-center">
            <div
              className="bg-slate-600 h-[400px] w-[320px] rounded-xl m-8 grid justify-center"
              onClick={(e) => {
                navigate("SBD");
              }}
            >
              <div className="bg-slate-500 h-[380px] w-[300px] my-auto grid justify-center rounded-md">
                <img src={SBDLogo} className="h-[100px] w-[100px] my-auto" />
                <div className="flex justify-center">
                  <p className="text-white">SBD</p>
                </div>
              </div>
            </div>
            <div
              className="bg-slate-600 h-[400px] w-[320px] rounded-xl m-8 grid justify-center"
              onClick={(e) => {
                navigate("DMJ");
              }}
            >
              <div className="bg-slate-500 h-[380px] w-[300px] my-auto grid justify-center rounded-md">
                <img src={DMJLogo} className="h-[100px] w-[100px] my-auto" />
                <div className="flex justify-center">
                  <p className="text-white">DMJ</p>
                </div>
              </div>
            </div>
            <div
              className="bg-slate-600 h-[400px] w-[320px] rounded-xl m-8 grid justify-center"
              onClick={(e) => {
                navigate("/OS");
              }}
            >
              <div className="bg-slate-500 h-[380px] w-[300px] my-auto grid justify-center rounded-md">
                <img src={OSLogo} className="h-[100px] w-[100px] my-auto" />
                <div className="flex justify-center">
                  <p className="text-white">OS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
