import React from "react";

function BackCard({ recipe }) {
  return (
    <div className="front-card-component">
      <h1>Ingredients</h1>
      <div className="back-card-content">
        <div className="back-card-content-body">
          <p>Ingredients will be listed here.</p>
        </div>
      </div>
    </div>
  );
}

export default BackCard;
