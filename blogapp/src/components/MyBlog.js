import React, { useState, useEffect } from "react";
import NavHomes from "./NavHomes";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const [getDataAdd, setGetDataAdd] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const dataFromAdd = JSON.parse(localStorage.getItem("BlogData"));
    const getmail = JSON.parse(localStorage.getItem("email"));

    const filterdData = dataFromAdd.filter((ele) => ele.id === getmail);

    setGetDataAdd(filterdData);
  }, []);

  const handleEdit = (idforcred) => {
    navigate(`/home/addblog/${idforcred}`);
  };

  const handleDelete = (index) => {
    const updatedData = getDataAdd.filter((elem) => {
      return index !== elem.idforcred;
    });
    setGetDataAdd(updatedData);
    localStorage.setItem("BlogData", JSON.stringify(updatedData));
    toast.success("Blog Deleted");
  };

  return (
    <>
      <div>
        <div>
          <NavHomes />
          {getDataAdd.length !== 0 ? (
            <div>
              {getDataAdd.map((elem) => {
                return (
                  <>
                    <div
                      key={elem.idforcred}
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
          ) : (
            <>
              <div className="mt-5">
                <p
                  className="fs-2"
                  style={{
                    textAlign: "center",
                  }}
                >
                  No Blogs
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBlog;
