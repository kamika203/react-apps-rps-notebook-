import React, { useEffect, useState } from "react";
import classes from "./Note.module.css";

const Page1 = ({ notes, setNotes, sortIt }) => {
  const [theme, setTheme] = useState("");
  const [dat, setDat] = useState("No date");
  const [lab, setLab] = useState("");
  const [note, setNote] = useState("");

  const cleanIns = () => {
    setTheme("");
    setDat("");
    setLab("");
    setNote("");
  };

  const save = (event) => {
    event.preventDefault();
    const data = { theme: theme, date: dat, label: lab, note: note };
    console.log(data);
    if (theme != "" && dat != "No date" && note != "") {
      const newNotes = [data, ...notes];
      sortIt(newNotes);
    }

    cleanIns();
  };

  return (
    <div className={classes.page1}>
      <h2 className={classes.he2}>Дневник 💜</h2>
      <form onSubmit={save}>
        <input
          type="text"
          placeholder="тема"
          value={theme}
          onChange={(event) => setTheme(event.target.value)}
        ></input>
        <input
          type="date"
          value={dat}
          onChange={(event) => setDat(event.target.value)}
        ></input>
        
        <input
          type="text"
          placeholder="метка"
          value={lab}
          onChange={(event) => setLab(event.target.value)}
        ></input>
        <textarea
          placeholder="введите текст"
          value={note}
          onChange={(event) => setNote(event.target.value)}
        ></textarea>
        <button className={classes.but}> Добавить</button>
      </form>
      <button className={classes.but} onClick={cleanIns}>
        {" "}
        Очистить поля
      </button>
    </div>
  );
};

export default Page1;
