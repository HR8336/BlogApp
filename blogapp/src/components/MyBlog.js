import React, { useState, useEffect } from "react";
import NavHomes from "./NavHomes";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import BlogData from "./BlogData";

const MyBlog = () => {
  const [getDataAdd, setGetDataAdd] = useState([]);
  const [isEditItem, setIsEditItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const dataFromAdd = localStorage.getItem("detailofAdd");
    if (dataFromAdd !== null) setGetDataAdd(JSON.parse(dataFromAdd));
  }, []);
  const getmail = JSON.parse(localStorage.getItem("email"));
  const handleEdit = (idforcred) => {
    let newEditItem = getDataAdd.find((elem) => {
      return elem.idforcred === idforcred;
    });
    setGetDataAdd(newEditItem);
    setIsEditItem(idforcred);
    navigate(`/home/editblog/${idforcred}`, { state: { newEditItem } });
  };

  const handleDelete = (index) => {
    const updatedData = getDataAdd.filter((elem) => {
      return index !== elem.idforcred;
    });
    setGetDataAdd(updatedData);
    localStorage.setItem("detailofAdd", JSON.stringify(updatedData));
    toast.success("Blog Deleted");
  };
  // useEffect(() => {
  //   localStorage.setItem("lists", JSON.stringify(getDataAdd));
  // }, [getDataAdd]);
  return (
    <>
      <div>
        <div>
          <NavHomes />
          <div>
            {getDataAdd
              .filter((elem) => elem.id === getmail)
              .map((elem, id) => {
                return (
                  <>
                    {/* <BlogData
                  title={elem.title}
                  interstedValue={elem.interstedValue}
                  description={elem.description}
                  
                /> */}
                    <div
                      key={id}
                      className="card mb-4"
                      style={{ width: "30rem", border: "solid black" }}
                    >
                      <div className="card-body">
                        <h4 className="card-title mb-4">{elem.title}</h4>
                        <h6 className="card-subtitle mb-2 text-muted">
                          Topic : {elem.interstedValue + ""}
                        </h6>
                        <p className="card-text">{elem.description}</p>
                        <FiEdit
                          cursor="pointer"
                          onClick={() => {
                            handleEdit(elem.idforcred);
                          }}
                          style={{ height: "25px", width: "25px" }}
                        />
                        <MdDelete
                          cursor="pointer"
                          onClick={() => {
                            handleDelete(elem.idforcred);
                          }}
                          style={{ height: "25px", width: "25px" }}
                          className="ms-4"
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

export default MyBlog;
