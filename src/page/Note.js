import React, { useState } from "react";
import { Link } from "react-router-dom";
import notes from "../assests/data";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
const Note = ({ match }) => {
  const noteId = match.params.id;
  const note = notes.find((note) => note.id === noteId);
  return (
    <div className="note">
      <div className="note-header">
        <h3>
            <Link to="/">
                <ArrowBackIcon />
            </Link>
        </h3>
      </div>
      <textarea placeholder="Edit note" value={notes?.body}></textarea>
    </div>
  );
};

export default Note;
