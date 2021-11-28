import React from "react";
import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
const App = () => {

  const [toggle, setToggle] = useState(0);
  return (
    <>
      <Header toggleit={toggle} settoggleit={setToggle} />
      <Content toggleit={toggle} />
    </>
  );
}

export default App;
