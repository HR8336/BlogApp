import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const UseeffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  // const [loading, setloading] = useState(false);
  const [prevY, setprevY] = useState(0);

  const loadingRef = useRef(null);
  const prevYRef = useRef({});
  const usersRef = useRef({});
  const pageRef = useRef({});

  const ref = useRef();
  prevYRef.current = prevY;
  usersRef.current = users;
  pageRef.current = page;
  // console.log("loadingref", loadingRef);

  useEffect(() => {
    if (ref.current === true) return;
    getUsers();
    setPage(pageRef.current + 1);

    let options = {
      root: null,
      rootMargin: "50px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(handleobserver, options);
    observer.observe(loadingRef.current);
    ref.current = true;
  }, []);

  const handleobserver = (entities, observer) => {
    // console.log("time to get more users");

    const y = entities[0].boundingClientRect.y;

    if (prevYRef.current > y) {
      // console.log("actually getting photos.");
      getUsers();
      setPage(pageRef.current + 1);
    } else {
      // console.log("Error");
    }
    // console.log("current :", y, "prevY :", prevY);
    setprevY(y);
  };
  const getUsers = async () => {
    try {
      let userRetrived = await axios.get(
        `https://api.instantwebtools.net/v1/passenger?page=${pageRef.current}&size=10`
      );
      if (userRetrived) {
        const newData = userRetrived.data.data.map((el) => {
          return { ...el, Unique_Id: uniqueName() };
        });
        setUsers([...usersRef.current, ...newData]);
      }
    } catch (error) {
      // console.log()
      console.log("ERROR");
    }
  };

  const uniqueName = () => {
    return Math.random().toString(36).toUpperCase().substring(2, 9);
  };

  // console.log(uniqueName());

  return (
    <>
      <div>
        <div>
          {users.map((curlem, index) => {
            return (
              <>
                <div className="container" key={index}>
                  <div className="row">
                    <div className="col-sm">
                      <p>Id: {curlem._id}</p>
                      <p>Name : {curlem.name}</p>
                      <p>Trips : {curlem.trips}</p>
                      <p>Unique Id: {curlem.Unique_Id}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div
          className="scroll"
          ref={loadingRef}
          style={{ height: "10px", margin: "20px", background: "white" }}
        >
          Loading...
          {/* <span style={{ display: loading ? "black" : "none" }}></span> */}
        </div>
      </div>
    </>
  );
};

export default UseeffectAPI;
