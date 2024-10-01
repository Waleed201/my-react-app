import React from "react";
import "../css/TeamCard.css";

function TeamCard({ teamName, details, imageUrl, joinLink }) {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={teamName} />
      <div className="cardContant">
        <h2>{teamName}</h2>
        <p>{details}</p>
        <div><a href={joinLink}>الانضمام</a></div>
      </div>
    </div>
  );
}

export default TeamCard;
