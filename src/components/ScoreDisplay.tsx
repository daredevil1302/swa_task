import React from "react";
import "./styles.css";

type displayPropType = {
  finalScore: number;
};

const ScoreDisplay = ({ finalScore }: displayPropType) => {
  return (
    <>
      <span className="scoreDisplay">Final scrabble score amounts to:</span>
      <div className="finalScoreDisplay">
        {finalScore === 0 ? "" : finalScore}
      </div>
    </>
  );
};

export default ScoreDisplay;
