import React from "react";
// import Formlist from "./components/Formlist";
import "./App.css";
import Accordian from "./Project2/Accordian";
import Picture from "./components/Picture";
// import Project1 from "./components/Project1";
// import Text from "./components/Text";
import Sdata from "./components/Sdata";
// import P1data from "./components/P1data";
// import Todo from "./Project3/Todo";

function App() {
  return (
    <>
      {/* <Text/> */}
      <Picture {...Sdata} />
      {/* <Project1 Name={P1data} /> */}
      {/* <Formlist /> */}
      {/* <Accordian /> */}
      {/* <Todo /> */}
    </>
  );
}

export default App;
