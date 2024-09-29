import React from "react";
import "../css/TeamCard.css";

function TeamCard({ teamName, details, imageUrl, joinLink }) {
  return (
    <div className="team-card">
      <img src={imageUrl} alt={teamName} />
      <div>
        <h2>{teamName}</h2>
        <p>{details}</p>
        <a href={joinLink}>الانضمام</a>
      </div>
    </div>
  );
}

export default TeamCard;
