import React, { useState, useEffect } from "react";
import NavHomes from "./NavHomes";
import { MultiSelect } from "react-multi-select-component";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const getLocaldata = () => {
  let list = localStorage.getItem("detailofAdd");
  if (list) {
    return JSON.parse(localStorage.getItem("detailofAdd"));
  } else {
    return [];
  }
};

const AddBlog = () => {
  const { state } = useLocation();
  let newEditItem;
  if (state?.newEditItem) newEditItem = state?.newEditItem;
  // console.log("selectedData", state?.newEditItem);

  const options = [
    { label: "Sport", value: "Sport" },
    { label: "Food", value: "Food" },
    { label: "Travel", value: "Travel" },
    { label: "Fashion", value: "Fashion" },
    { label: "Health", value: "Health" },
  ];
  const [detailofAdd, setDetailOfAdd] = useState(getLocaldata());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedData, setSelectedData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    if (selected.some((obj) => obj)) {
      let interstedValue = [];
      selected.forEach((obj) => interstedValue.push(obj.value));

      let dataOfAdd = {
        title,
        description,
        interstedValue,
        // id: JSON.parse(localStorage.getItem("id")),  // problem in second time login
        id: JSON.parse(localStorage.getItem("email")),
        idforcred: Math.trunc(Math.random() * 1000) + 1,
      };
      const totalDataofAdd = [...detailofAdd, dataOfAdd];
      setDetailOfAdd(totalDataofAdd);
      localStorage.setItem("detailofAdd", JSON.stringify(totalDataofAdd));
      setTitle("");
      setDescription("");
      setSelected([]);
      toast.success("Your Blog Added");
    } else {
      toast.warn("Please Select Topic Related Your Blog!!");
    }
  };
  useEffect(() => {
    if (state?.newEditItem) {
      setSelectedData(state.newEditItem);
    } else {
      setSelectedData(null);
    }
  }, [newEditItem]);
  useEffect(() => {
    if (state?.newEditItem) {
      setSelectedData(state.newEditItem);
    } else {
      setSelectedData(null);
    }
    const data = localStorage.getItem("detailofAdd");

    if (data !== null) {
      setDetailOfAdd(JSON.parse(data));
    }
  }, []);

  const onSelected = (data) => {
    setSelected(data);
  };

  return (
    <>
      <div>
        <NavHomes />
        <div className="container my-3 ">
          <h1>{selectedData ? "Edit Blog " : "Add Blog"}</h1>
          <form className="my-3">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={selectedData ? selectedData.title : title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                style={{ width: "350px" }}
                placeholder="Enter Title"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputDescription1" className="form-label">
                Description
              </label>
              <input
                type="text"
                value={selectedData ? selectedData.description : description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                style={{ height: "200px" }}
                className="form-control"
                placeholder="Enter description"
                id="exampleInputDescription1"
              />
            </div>

            <div className="mb-3">
              <h6 className="mb-3">
                Select Topic<span style={{ color: "red" }}> *</span>
              </h6>
              <MultiSelect
                options={options}
                value={selected}
                onChange={onSelected}
                labelledBy="Select"
              />
            </div>
            <button
              type="submit"
              onClick={onSubmit}
              className="btn btn-primary mt-10px"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div>
        <div className="mb-20">
          <p>
            <span style={{ color: "red" }}>*</span>Required Field
          </p>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
