import React, { useState, useEffect } from "react";
import Logout from "./Logout";

import "./Contact.css";
// localStorage.clear();
function Contact() {
  const [detail, setdetail] = useState(localStorage.getItem("detail") || []);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const addData = (e) => {
    e.preventDefault();

    let data = {
      name,
      description,
      image,
      createid: Math.trunc(Math.random() * 1000) + 1,
    };
    const totalData = [...detail, data];
    setdetail(totalData);
    setName("");
    setDescription("");
    localStorage.setItem("detail", JSON.stringify(totalData));
  };

  useEffect(() => {
    const data = localStorage.getItem("detail");

    if (data !== null) {
      setdetail(JSON.parse(data));
    }
  }, []);

  return (
    <>
      <div className="contact_title">Contact Us</div>

      <form onSubmit={addData} className="all_input">
        <label htmlFor="fname">First Name</label>
        <br />
        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br />

        <label htmlFor="image">Add Image</label>
        <br />
        <input
          className="image_upload"
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        ></input>
        <br />

        <label htmlFor="descripton">Description</label>
        <br />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></input>
        <div>
          <button type="submit" className="submit_btn">
            Submit
          </button>
        </div>
      </form>
      <Logout />
    </>
  );
}

export default Contact;
