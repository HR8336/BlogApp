import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  Logout  from "./Logout";

function Harsh() {
  const navigate = useNavigate();
  const backtohome = () => {
    navigate("/home");
  };

  const [getdatals, setGetdatals] = useState([]);
  useEffect(() => {
    const getdata = localStorage.getItem("detail");
    if (getdata !== null) setGetdatals(JSON.parse(getdata));
  }, []);

  return (
    <>
      {getdatals.map((item) => {
        return (
          <>
            <h3>Name : {item.name}</h3>
            {/* <h2>Image : {item.image}</h2> */}
            <h3>Description : {item.description}</h3>
          </>
        );
      })}
      <button onClick={backtohome}>Back</button>
      <Logout />

    </>
  );
}
export default Harsh;
