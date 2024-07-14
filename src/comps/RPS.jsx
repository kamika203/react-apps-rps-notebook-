import React, { useState, useEffect } from "react";
import styles from "./RPS.module.css";
import rock from "../images/stone.svg";
import paper from "../images/paper.svg";
import sci from "../images/scissors.svg";
import al from "../images/rock_paper_scissors_lusnkucazw9m.svg";

export default function RPS() {
  const myGround = styles.ground + " " + styles.choose;
  const [myCard, setMyCard] = useState(al);
  const [compCard, setCompCard] = useState(al);
  const [myScore, setMyScore] = useState(() => {
    const myS = localStorage.getItem("myScore");
    return myS ? parseInt(myS) : 0;
  });
  const [compScore, setCompScore] = useState(() => {
    const comS = localStorage.getItem("compScore");
    return comS ? parseInt(comS) : 0;
  });
  const [ti, setTie] = useState(() => {
    const ti = localStorage.getItem("tie");
    return ti ? parseInt(ti) : 0;
  });
  const [msg, setMsg] = useState("");

  useEffect(() => {
    localStorage.setItem("compScore", compScore);
    localStorage.setItem("myScore", myScore);
    localStorage.setItem("tie", ti);
  }, [myScore, compScore,ti]);

  function chosen(name) {
    setCompCard(al);
    setMyCard(name);
    setMsg("");
    play();
  }

  function zero() {
    setMyScore(0);
    setCompScore(0);
    setTie(0);
    setCompCard(al);
    setMyCard(al);
    setMsg("");
  }

  useEffect(() => {
    if (myCard !== al && compCard !== al) {
      checkGameResult();
    }
  }, [myCard, compCard]);

  function checkGameResult() {
    if (
      (myCard === rock && compCard === sci) ||
      (myCard === sci && compCard === paper) ||
      (myCard === paper && compCard === rock)
    ) {
      setMyScore(myScore + 1);
      setMsg("Вы выиграли!");
    } else if (myCard === compCard) {
      setTie(ti + 1);
      setMsg("Ничья.");
    } else if (
      (compCard === rock && myCard === sci) ||
      (compCard === sci && myCard === paper) ||
      (compCard === paper && myCard === rock)
    ) {
      setCompScore(compScore + 1);
      setMsg("Вы проиграли!");
    }
  }

  function play() {
    let comps = Math.floor(Math.random() * 3);
    if (comps === 0) {
      setCompCard(paper);
    } else if (comps === 1) {
      setCompCard(rock);
    } else if (comps === 2) {
      setCompCard(sci);
    }
  }

  return (
    <div className={styles.telo}>
      <div className={styles.header}>
        <img src={al} alt="" />
        <div>Ваш счет: {myScore}</div>
        <div>Ничья: {ti}</div>
        <div>Счет компа: {compScore}</div>
      </div>

      <div className={styles.playground}>
        <div className={myGround}>
          <div className={styles.cards} onClick={() => chosen(paper)}>
            <img src={paper} alt="" />
          </div>
          <div className={styles.cards} onClick={() => chosen(rock)}>
            <img src={rock} alt="" />
          </div>
          <div className={styles.cards} onClick={() => chosen(sci)}>
            <img src={sci} alt="" />
          </div>
          <div className={styles.card}>
            <img src={myCard} alt="" />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.ground}>
          <div className={styles.card}>
            <img src={compCard} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1>{msg}</h1>
      </div>
      <div>
        {/* <button onClick={play}>ИГРАТЬ</button> */}
        <button className={styles.butto} onClick={zero}>СЧЕТ 0</button>
      </div>
    </div>
  );
}
