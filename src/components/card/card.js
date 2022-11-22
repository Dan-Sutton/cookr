import "./card.css";
import "./flip-transition.css";
import FrontCard from "./front-card";

function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">Back</div>

      <div className="card-front">
        <FrontCard />
      </div>
    </div>
  );
}

export default Card;
