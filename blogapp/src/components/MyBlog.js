import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import { useLoadingContext } from "react-router-loading";

export const GridBox = styled.div`
  float: left;
  width: 49%;
  margin-right: 20px;
  min-height: 400px;
  background: #fffff7;
  box-shadow: 4px 2px 16px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 25px;
  color: #414141;
`;

const MyBlog = () => {
  const loadingContext = useLoadingContext();
  const [getDataAdd, setGetDataAdd] = useState([]);

  const navigate = useNavigate();

  //localstorage ..........

  // useEffect(() => {
  //   const dataFromAdd = JSON.parse(localStorage.getItem("BlogData"));
  //   const getmail = JSON.parse(localStorage.getItem("email"));

  //   const filterdData = dataFromAdd.filter((ele) => ele.id === getmail);

  //   setGetDataAdd(filterdData);
  // }, []);

  //firebase.........

  const handleEdit = (idforcred) => {
    navigate(`/home/addblog/${idforcred}`);
  };
  const blogCollection = collection(db, "allBlog");
  useEffect(() => {
    const getmail = JSON.parse(localStorage.getItem("email"));
    const getDataFromFb = async () => {
      const dataOfMyBlog = await getDocs(blogCollection);

      const data = dataOfMyBlog.docs.map((item) => ({
        ...item.data(),
        idforcred: item.id,
      }));
      console.log(data);

      const filterdData = data.filter((ele) => ele.id === getmail);

      setGetDataAdd(filterdData);
    };

    getDataFromFb();
  }, [blogCollection]);

  const handleDelete = (index) => {
    // const blogCollection = collection(db, "allBlog");
    const updatedData = getDataAdd.filter((elem) => {
      return index !== elem.idforcred;
    });
    setGetDataAdd(updatedData);
    localStorage.setItem("BlogData", JSON.stringify(updatedData));
    toast.success("Blog Deleted");
  };
  loadingContext.done();
  return (
    <>
      <div>
        <div>
          {getDataAdd.length !== 0 ? (
            <div>
              {getDataAdd.map((elem, id) => {
                return (
                  <GridBox
                    key={id}
                    className="card mb-4 mt-5"
                    style={{ width: "25rem", border: "solid black" }}
                  >
                    <div className="card-body">
                      <h4 className="card-title mb-4">{elem.title}</h4>
                      <h6 className="card-subtitle mb-2 text-muted">
                        Topic : {elem.interestedValue + ""}
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
                  </GridBox>
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
