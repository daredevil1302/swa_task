import React from "react";
import { Scrabble } from "../data/scrabbleData";
import "./styles.css";

type listPropType = {
  data: Scrabble;
};

const ScoreList = ({ data }: listPropType) => {
  return (
    <div className="homeLayout mt-12">
      <strong>SCORE LIST:</strong>
      {Object.keys(data).map((key) => (
        <span key={key}>
          {key} : {data[key]}
        </span>
      ))}
    </div>
  );
};

export default ScoreList;
