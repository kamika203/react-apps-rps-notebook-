import React from 'react';
import classes from "./Note.module.css";

const MN = ({note,del}) => {
  return (
    <div className={classes.mini}>
        <div className={classes.theme}>{note.theme}</div>
        <div className={classes.nums}>
        {note.date}
        </div>
        <div className={classes.lab}>метка: {note.label}</div>
        <div className={classes.te}>{note.note}</div>
        <button className={classes.but2} onClick={()=>del(note.theme, note.num)}>Удалить</button>
    </div>
  )
}

export default MN