import "./flippable-card.css";
import Card from "./card/card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import ReactFloaterJs from "react-floaterjs";

function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <ReactFloaterJs>
      <div
        className="flippable-card-container"
        onMouseEnter={() => {
          setShowFront(false);
        }}
        onMouseLeave={() => {
          setShowFront(true);
        }}
      >
        <CSSTransition in={showFront} timeout={300} classNames="flip">
          <Card />
        </CSSTransition>
      </div>
    </ReactFloaterJs>
  );
}

export default FlippableCard;
