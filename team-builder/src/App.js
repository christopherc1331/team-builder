import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
import TeamList from "./Components/TeamList";
import Form from "./Components/Form.js";

function App() {
  const [teamList, setTeamList] = useState(data);

  const addMember = member => {
    setTeamList([...teamList, member]);
  };

  return (
    <div className="App">
      <h1>Add A Member</h1>
      <Form addMember={addMember} />
      <h1>BEHOLD, Your Team!</h1>
      <TeamList teamList={teamList} />
    </div>
  );
}

export default App;
