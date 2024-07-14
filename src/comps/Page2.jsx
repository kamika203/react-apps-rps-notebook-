import React from "react";
import classes from "./Note.module.css";
import MN from "./MN";

const Page2 = ({ notes, del }) => {


  return (
    <div className={classes.page2}>
      <h2 className={classes.he2}>Записи</h2>
      <div className={classes.ns}>
        {notes.map((note) => (
          <MN note={note} del={del}/>
        ))}
      </div>
    </div>
  );
};

export default Page2;
