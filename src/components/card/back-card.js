import React from "react";

function BackCard({ recipe }) {
  return (
    <div className="front-card-component">
      <h1>Ingredients</h1>
      {recipe.extendedIngredients != null ? (
        <ul className="recipe-list">
          {recipe.extendedIngredients.map((i) => {
            return <li>{i.original}</li>;
          })}
        </ul>
      ) : (
        <div>
          <p>Ingredients will be listed here.</p>
        </div>
      )}

      <div className="back-card-content">
        <div className="back-card-content-body"></div>
      </div>
    </div>
  );
}

export default BackCard;
