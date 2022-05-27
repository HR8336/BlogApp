import BlogData from "./BlogData";
import NavHomes from "./NavHomes";
import { BsSave2 } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
const AllBlog = () => {
  const [getDataAdd, setGetDataAdd] = useState([]);

  useEffect(() => {
    const getInterest = JSON.parse(localStorage.getItem("loggedUser"));
    const dataFromAdd = JSON.parse(localStorage.getItem("BlogData"));
    const getmail = JSON.parse(localStorage.getItem("email"));

    if (getInterest) {
      if (dataFromAdd) {
        let filteredData = [];
        const selfBlog = dataFromAdd.filter((el) => el.id === getmail);

        const withOutId = dataFromAdd.filter((el) => el.id !== getmail);

        const h = withOutId.forEach((el) => {
          el.interstedValue.forEach((element) => {
            if (getInterest.interstedValue.includes(element)) {
              filteredData.push(el);
            }
          });
        });

        setGetDataAdd([...filteredData, ...selfBlog]);
        console.log(getDataAdd);
      }
    }
  }, []);

  const handleClickofSave = () => {
    toast.success("Bloged Saved");
    
  };

  return (
    <>
      <div>
        <NavHomes />
        <div>
          <div>
            {getDataAdd.map((elem) => {
              return (
                <>
                  <div>
                    <div>
                      <BlogData
                        title={elem.title}
                        interstedValue={elem.interstedValue}
                        description={elem.description}
                      />
                    </div>
                    <div className="mb-5">
                      <BsSave2
                        onClick={handleClickofSave}
                        cursor="pointer"
                        style={{
                          height: "25px",
                          width: "25px",
                          marginLeft: "450px",
                        }}
                      />
                    </div>
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
