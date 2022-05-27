import React, { useEffect, useState } from "react";
import NavHomes from "./NavHomes";
import BlogData from "./BlogData";

const SavedBlog = () => {
  const [getDatafromLs, setGetDatafromLs] = useState([]);

  useEffect(() => {
    const datafromLs = localStorage.getItem("SavedBLogWithId");
    if (datafromLs) setGetDatafromLs(JSON.parse(datafromLs));
  }, []);
  const getmail1 = JSON.parse(localStorage.getItem("email"));

  return (
    <>
      <div>
        <NavHomes />
        <div>
          {getDatafromLs
            .filter((elem) => elem.id === getmail1)
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
    </>
  );
};

export default SavedBlog;
