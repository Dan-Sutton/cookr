import React from "react";
import { useState } from "react";

function FrontCard({ recipe }) {
  return (
    <div className="front-card-component">
      {/* todo image to prop */}
      <img className="card-img" alt="a tasty meal" src={recipe.image} />
      <div className="front-card-content">
        <h2>{recipe.title}</h2>
        <div className="front-card-content-body">
          <p>
            {recipe.readyInMinutes === "INIT"
              ? "Find a new random meal by pressing the X"
              : `🕐 ${recipe.readyInMinutes} mins`}
          </p>
          <p>
            {recipe.servings === "INIT"
              ? "Click on this card to see ingredients"
              : `🥘 ${recipe.servings} ${
                  recipe.servings === "1" ? "serving" : "servings"
                }`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
