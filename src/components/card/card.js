import BackCard from "./back-card";
import "./card.css";
import "./flip-transition.css";
import FrontCard from "./front-card";

function Card({ onClick, recipe }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        {" "}
        <BackCard recipe={recipe} />
      </div>

      <div className="card-front">
        <FrontCard recipe={recipe} />
      </div>
    </div>
  );
}

export default Card;
