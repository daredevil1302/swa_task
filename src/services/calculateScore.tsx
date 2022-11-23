import { Scrabble } from "../data/scrabbleData";

export const calculateScore = (word: string, data: Scrabble): number => {
  let lowerCaseWord = word.toLowerCase();
  let score = 0;

  for (let i = 0; i < lowerCaseWord.length; i++) {
    score += data[lowerCaseWord.charAt(i)] || 0;
  }
  return score;
};
