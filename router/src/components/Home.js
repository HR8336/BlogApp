import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import  Logout from "./Logout";

function Home({ props }) {
  const [getdatals, setGetdatals] = useState([]);
  useEffect(() => {
    const getdata = localStorage.getItem("detail");
    if (getdata !== null) setGetdatals(JSON.parse(getdata));
  }, []);

  return (
    <>
      {getdatals.map((item) => {
        return (
          <ul key={item.createid}>
            <Link to={`/home/page/${item.createid}`}>{item.name}</Link>
          </ul>
        );
      })}
      <Logout />
    </>
  );
}

export default Home;
