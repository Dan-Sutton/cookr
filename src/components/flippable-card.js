import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

function FlippableCard({ recipe }) {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          recipe={recipe}
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}

export default FlippableCard;
