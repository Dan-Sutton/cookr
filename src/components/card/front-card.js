import React from "react";
import { useState } from "react";

function FrontCard({ recipe }) {
  return (
    <div className="front-card-component">
      {/* todo image to prop */}
      <img
        className="card-img"
        alt="a tasty meal"
        src="https://www.seriouseats.com/thmb/QChcw6d_9s7rS4h57ADKBWEvxv4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-best-slow-cooked-bolognese-sauce-recipe-hero-03_1-3bf4f3401fa84c828f68071df496ddd3.JPG"
      />
      <div className="front-card-content">
        <h2>Spaghetti with Meat Sauce</h2>
        <div className="front-card-content-body">
          <p>🕐 45 mins</p>
          <p>🥘 4 servings</p>
        </div>
      </div>
    </div>
  );
}

export default FrontCard;
