// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SBD from "./pages/SBD";
import OS from "./pages/OS";
import DMJ from "./pages/DMJ";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SBD" element={<SBD />} />

        <Route path="/OS" element={<OS />} />

        <Route path="/DMJ" element={<DMJ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
