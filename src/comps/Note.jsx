import React, { useState, useEffect } from "react";
import classes from "./Note.module.css";
import Page1 from "./Page1";
import Page2 from "./Page2";

const Note = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes") ?? "[]";

    return JSON.parse(storedNotes);
  });

  const sortIt = (note) => {
    let its = [...note];
    its.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      // Сравнение по году
      if (dateA.getFullYear() !== dateB.getFullYear()) {
        return dateB.getFullYear() - dateA.getFullYear();
      }
  
      // Сравнение по месяцу
      if (dateA.getMonth() !== dateB.getMonth()) {
        return dateB.getMonth() - dateA.getMonth();
      }
  
      // Сравнение по дню
      return dateB.getDate() - dateA.getDate();
    });
    
    setNotes(its);
  };

  const deleteNote = (theme,num) => {
    setNotes(notes.filter((item) => item.theme !== theme && item.num!==num));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={classes.telo}>
      <Page1 notes={notes} setNotes={setNotes} sortIt={sortIt}/>
      <Page2 notes={notes} del={deleteNote}/>
    </div>
  );
};

export default Note;
