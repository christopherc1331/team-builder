import React, { useState } from "react";
import "./App.css";
import TeamList from "./Components/TeamList";

function App() {
  const [teamList, setTeamList] = useState([]);
  return (
    <div className="App">
      <TeamList />
    </div>
  );
}

export default App;
