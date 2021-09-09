import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
const Note = ({ match, history }) => {
  const noteId = match.params.id;
  const [note, setNote] = useState([]);
  useEffect(() => {
    getData();
  }, [noteId]);
  const getData = async () => {
    if (noteId === "new") return;
    const response = await fetch(`http://127.0.0.1:5000/notes/${noteId}`);
    const data = await response.json();
    setNote(data);
  };
  const createNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };
  const updateNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${noteId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...note, updated: new Date() }),
    });
  };
  const handleSubmit = () => {
    if (noteId != "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    } else if (noteId === "new" && note !== null) {
      createNote();
    }
    updateNote();
    history.push("/");
  };
  const handleChange = (event) => {
    setNote({ ...note, body: event.target.value });
  };
  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${noteId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    history.push("/");
  };
  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowBackIcon />
          </Link>
        </h3>
        <div className="update">
          <h3 onClick={handleSubmit} className="done">
            <Link to="/">{noteId === "new" ? <DoneIcon /> : <DoneIcon />}</Link>
          </h3>
          <h3 onClick={deleteNote} className={noteId !== "new" ? "delete" : ""}>
            <Link to="/">{noteId !== "new" ? <DeleteIcon /> : ""}</Link>
          </h3>
        </div>
      </div>
      <textarea
        placeholder="Edit note"
        onChange={handleChange}
        value={note.body}
      ></textarea>
    </div>
  );
};

export default Note;
