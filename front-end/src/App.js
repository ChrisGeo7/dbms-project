import CompetitionList from "./Components/CompetitionList";
import { Route, Routes } from "react-router-dom";
import Agent from "./Components/Agent";
import Manager from "./Components/Manager";
import Public from "./Components/Public";
import Home from "./Components/Home";
import Query1 from "./Components/Query1";
import Query2 from "./Components/Query2";
import Query3 from "./Components/Query3";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/public" element={<Public />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/query1" element={<Query1 />} />
        <Route path="/query2" element={<Query2 />} />
        <Route path="/query3" element={<Query3 />} />
      </Routes>
      {/* <CompetitionList /> */}
    </div>
  );
}

export default App;
