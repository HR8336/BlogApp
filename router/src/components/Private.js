import { React, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const [isloggedin, setisloggedin] = useState(true);
  const ref = useRef();

  const isUserLogIn = () => {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(user);
    if (user) {
      console.log("true");
      setisloggedin((prevState) => true);
    } else {
      console.log("false");
      setisloggedin((prevState) => false);
    }
  };

  useEffect(() => {
    console.log("asdf");
    if (ref.current === true) return;
    isUserLogIn();
    ref.current = true;
  }, []);

  return isloggedin ? children : <Navigate to="/" />;
};

export default Private;
