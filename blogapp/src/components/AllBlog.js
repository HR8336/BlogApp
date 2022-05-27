import BlogData from "./BlogData";
import NavHomes from "./NavHomes";
import { BsSave2 } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const AllBlog = () => {
  const [getDataAdd, setGetDataAdd] = useState([]);
  const [savedBlog, setSavedBlog] = useState(
    JSON.parse(localStorage.getItem("SavedBlog")) || []
  );

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
      }
    }
  }, []);

  const handleClickofSave = (idforcred) => {
    toast.success("Bloged Saved");
    const getSavedBlog = getDataAdd.filter(
      (ele) => ele.idforcred === idforcred
    );

    const getMail = JSON.parse(localStorage.getItem("email"));
    const getAllUser = JSON.parse(localStorage.getItem("detail"));

    const getMailOfUser = getAllUser.map((ele) => {
      return ele.email;
    });
    console.log("getmailOfuser", getMailOfUser);
    console.log("getMail", getMail);
    const check = getMailOfUser.includes(getMail);
    console.log(check);

    // if (getMailOfUser.includes(getMail)) {
    //   const setIdForBlog = getAllUser.map((data) => {
    //     return { ...data, idForBlog: Math.trunc(Math.random() * 1000) + 1 };
    //   });

    //   localStorage.setItem("detail", JSON.stringify(setIdForBlog));
    // }

    const totalBlog = [...savedBlog, getSavedBlog];
    const updateData = totalBlog.flat();
    setSavedBlog(updateData);

    localStorage.setItem("SavedBlog", JSON.stringify(updateData));

    const setIdforBlog = updateData.map((data) => {
      return { ...data, idForBlog: getMail };
    });
    localStorage.setItem("SavedBLogWithId", JSON.stringify(setIdforBlog));
  };

  return (
    <>
      <div>
        <NavHomes />
        <div>
          <div>
            {getDataAdd.map((elem, id) => {
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
                        color="red"
                        onClick={() => {
                          handleClickofSave(elem.idforcred);
                        }}
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
