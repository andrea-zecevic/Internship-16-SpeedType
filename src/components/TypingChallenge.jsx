import React, { useState, useEffect } from "react";
import styles from "./TypingChallenge.module.css";
import { calculateWpm } from "../utils/WpmCalculator";

const TypingChallenge = ({ text, onComplete }) => {
  const [userInput, setUserInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    if (userInput.length === 1) {
      setStartTime(new Date());
    }
  }, [userInput]);

  useEffect(() => {
    let interval = null;
    if (startTime) {
      interval = setInterval(() => {
        setElapsedTime(new Date() - startTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [startTime]);

  useEffect(() => {
    if (userInput === text) {
      const wpm = calculateWpm(text.split(" ").length, elapsedTime);
      onComplete(wpm);

      setUserInput("");
      setStartTime(null);
      setElapsedTime(0);
    }
  }, [userInput, text, elapsedTime, onComplete]);

  return (
    <div className={styles.typingChallenge}>
      <p>{text}</p>
      <textarea
        className={styles.typingInput}
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Start typing here..."
      />
      {}
      <div>Elapsed Time: {Math.round(elapsedTime / 1000)} seconds</div>
    </div>
  );
};

export default TypingChallenge;
