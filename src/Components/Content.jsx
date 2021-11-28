import React from "react";
import "./css/content.css";
import Sidebar from "../Components/Sidebar";
import Notes from "../Components/Notes";
const Content = (props) => {
  return (
    <>
      <div className="content">
        <Sidebar showhide={props.toggleit} />
        <Notes />
      </div>
    </>
  );
};

export default Content;
