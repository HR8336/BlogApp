import BlogData from "./BlogData";
import NavHomes from "./NavHomes";
import React, { useState, useEffect } from "react";
const AllBlog = () => {
  const [getDataAdd, setGetDataAdd] = useState([]);
  const [interestedValue, setInterestedValue] = useState([]);
  // const getInterestedValue = JSON.parse(
  //   localStorage.getItem("interestedValue")
  // );

  useEffect(() => {
    const dataFromAdd = localStorage.getItem("detailofAdd");
    if (dataFromAdd !== null) setGetDataAdd(JSON.parse(dataFromAdd));
  }, []);
  useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser");
    if (loggedUser != null) setInterestedValue(JSON.parse(loggedUser));
  }, []);
  const getmail = JSON.parse(localStorage.getItem("email"));
  const value = interestedValue.interstedValue;
  console.log("interestedValue", value);

  const getdatavalue = getDataAdd.map((elem) => {
    return console.log("value", elem.interestedValue);
  });

  return (
    <>
      <div>
        <NavHomes />
        <div>
          <div>
            {getDataAdd
              .filter((elem) => elem.interstedValue === value)
              .map((elem, id) => {
                return (
                  <>
                    <div>
                      <BlogData
                        title={elem.title}
                        interstedValue={elem.interstedValue}
                        description={elem.description}
                      />
                    </div>
                  </>
                );
              })}
          </div>
          <div>
            {getDataAdd
              .filter((elem) => elem.id === getmail)
              .map((elem, id) => {
                return (
                  <>
                    <div>
                      <BlogData
                        title={elem.title}
                        interstedValue={elem.interstedValue}
                        description={elem.description}
                      />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlog;
