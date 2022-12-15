import React, { useState } from "react";
import "./App.css";
import Dice from "../src/assets/images/icon-dice.svg";
import Divider from "../src/assets/images/pattern-divider-desktop.svg";

export default function App() {
  const [advice, setAdvice] = useState({
    id: 0,
    advice: "Generate your random advice.",
  });

  function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setAdvice(data.slip));
  }

  return (
    <main className="advice-card">
      <div className="advice-container">
        <p className="advice-id">{`ADVICE #${advice.id}`}</p>
        <p className="advice">{`"${advice.advice}"`}</p>
        <img className="divider" src={Divider} alt="divider" />
        <span className="dice-container">
          <img className="dice" src={Dice} onClick={getAdvice} alt="dice" />
        </span>
      </div>
    </main>
  );
}
