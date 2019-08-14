import React from "react";

const TeamList = props => {
  return (
    <div className="cardsContainer">
      {props.teamList.map(member => {
        return (
          <div className="card" key={member.name}>
            <h2>{member.name}</h2>
            <em>{member.email}</em>
            <strong>{member.role}</strong>
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
