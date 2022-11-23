import React, { useState, useMemo, useEffect } from "react";

import { scrabbleData, Scrabble } from "../data/scrabbleData";
import { calculateScore } from "../services/calculateScore";
import ScoreDisplay from "./ScoreDisplay";
import ScoreList from "./ScoreList";
import "./styles.css";

const Homepage = () => {
  const [data, setData] = useState<Scrabble>(scrabbleData);
  const [inputHistory, setInputHistory] = useState<string[]>([]);
  const [inputChars, setInputChars] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("Input history", JSON.stringify(inputHistory));
  }, [inputHistory]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputChars(e.target.value);
    setInputHistory((prevInput) => [...prevInput, e.target.value]);
  };

  const finalScore = useMemo<number>(() => {
    return calculateScore(inputChars, data);
  }, [inputChars]);

  return (
    <div className="homeLayout">
      <input className="scrabbleInput" onChange={handleInput}></input>
      <ScoreDisplay finalScore={finalScore} />
      <ScoreList data={data} />
      <div className="historyInfo">
        Check out your input history in your browser's local storage!
      </div>
    </div>
  );
};

export default Homepage;
