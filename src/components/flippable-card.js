import React from "react";
import "./flippable-card.css";
import Card from "./card/card";

function FlippableCard(props) {
  return (
    <div className="flippable-card-container">
      <Card />
    </div>
  );
}

export default FlippableCard;
