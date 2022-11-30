import CompetitionList from "./Components/CompetitionList";
import { Route, Routes } from "react-router-dom";
import Agent from "./Components/Agent";
import Manager from "./Components/Manager";
import Public from "./Components/Public";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manager" element={<Manager />} />
        <Route path="/public" element={<Public />} />
        <Route path="/agent" element={<Agent />} />
      </Routes>
      {/* <CompetitionList /> */}
    </div>
  );
}

export default App;
