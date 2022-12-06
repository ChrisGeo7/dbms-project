import { Route, Routes } from "react-router-dom";
import Agent from "./Components/Agent";
import Public from "./Components/Public";
import Home from "./Components/Home";
import Query1 from "./Components/Query1";
import Query2 from "./Components/Query2";
import Query3 from "./Components/Query3";
import Query4 from "./Components/Query4";
import Query5 from "./Components/Query5";
import Query6 from "./Components/Query6";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/public" element={<Public />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/query1" element={<Query1 />} />
        <Route path="/query2" element={<Query2 />} />
        <Route path="/query3" element={<Query3 />} />
        <Route path="/query4" element={<Query4 />} />
        <Route path="/query5" element={<Query5 />} />
        <Route path="/query6" element={<Query6 />} />
      </Routes>
      {/* <CompetitionList /> */}
    </div>
  );
}

export default App;
