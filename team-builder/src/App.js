import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
import TeamList from "./Components/TeamList";
import Form from "./Components/Form.js";

function App() {
  const [teamList, setTeamList] = useState(data);
  return (
    <div className="App">
      <h1>Add A Member</h1>
      <Form />
      <h1>BEHOLD, Your Team!</h1>
      <TeamList teamList={teamList} />
    </div>
  );
}

export default App;
