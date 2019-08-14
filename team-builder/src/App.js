import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
import TeamList from "./Components/TeamList";

function App() {
  const [teamList, setTeamList] = useState(data);
  return (
    <div className="App">
      <h1>Behold Your Team!</h1>
      <TeamList teamList={teamList} />
    </div>
  );
}

export default App;
