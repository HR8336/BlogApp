import React, { useState } from "react";
import { AboutItems } from "./NavbarIems";
import { Link } from "react-router-dom";
import "./Aboutmenu.css";

function Dropdown() {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      <ul
        className={dropdown ? "aboutmenu_clicked":"aboutmenu"}
        onClick={() => {
          setdropdown(true);
        }}
      >
        {AboutItems.map((d) => {
          return (
            <li key={d.id}>
              <Link to={d.path} 
              onClick={() => {
          setdropdown(false) }}>{d.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
