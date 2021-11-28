import React, { useState, useEffect } from "react";
import "./css/displaynotes.css";
function DisplayNotes(props) {
  const [Title_Of_Notes, setTitle_Of_Notes] = useState([]);
  const [Description_Of_Notes, setDescription_Of_Notes] = useState([]);

  useEffect(() => {
    try {
      setTitle_Of_Notes((Title_Of_Notes) => [
        ...Title_Of_Notes,
        props.note_heading,
      ]);
      setDescription_Of_Notes((Description_Of_Notes) => [
        ...Description_Of_Notes,
        props.note_des,
      ]);
    } catch (error) {
      console.log(error);
    }
  }, [props.note_heading, props.note_des]);

  return (
    <>
      <div className="display_notes">
        {Title_Of_Notes.map((element, index) => (
          <div className="displaynotes_item">
            <div className="item_title">{Title_Of_Notes[index]}</div>
            <div className="item_desc">{Description_Of_Notes[index]}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DisplayNotes;
