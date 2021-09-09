import React, { useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import ListItem from "../components/ListItems";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    let response = await fetch("http://127.0.0.1:5000/notes");
    let data = await response.json();
    setNotes(data);
  };
  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782;Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => {
          return <ListItem key={index} note={note} />;
        })}
      </div>
      <AddNote />
    </div>
  );
};

export default Notes;
