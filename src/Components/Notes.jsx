import React, { useState } from "react";
import "./css/notes.css";
import CreateNote from "./CreateNote";
import DisplayNotes from "./DisplayNotes";

const Notes = () => {
  const [heading, setHeading] = useState(" ");
  const [des, setDes] = useState(" ");

  const handlecallback = (title, description) => {
    console.log(title);
    console.log(description);
    setHeading(title);
    setDes(description);
  };
  return (
    <div className="notes-section">
      <CreateNote parentCallback={handlecallback} />
      <DisplayNotes note_heading={heading} note_des={des} />
    </div>
  );
};

export default Notes;
