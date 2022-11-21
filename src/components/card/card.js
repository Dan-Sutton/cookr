import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card-front">Front</div>
      <div className="card-back">Back</div>
    </div>
  );
}

export default Card;
