import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useNavigate } from "react-router-dom";
import NavHomes from "./NavHomes";

const Profile = () => {
  const [data, setGetDataAdd] = useState({});
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [passWord, setPassWord] = useState("");
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    const dataFromAdd = JSON.parse(localStorage.getItem("detail"));
    const getmail = JSON.parse(localStorage.getItem("email"));
    console.log(dataFromAdd);
    const filterdData = dataFromAdd.find((ele) => ele.email === getmail);
    console.log(filterdData);
    setGetDataAdd(filterdData);
  }, []);

  const onSelected = (data) => {
    setSelected(data);
  };

  const submitData = (e) => {
    e.preventDefault();

    navigate("/signup");
  };
  const options = [
    { label: "Sport", value: "Sport" },
    { label: "Food", value: "Food" },
    { label: "Travel", value: "Travel" },
    { label: "Fashion", value: "Fashion" },
    { label: "Health", value: "Health" },
  ];
  return (
    <>
      <div>
        <div>
          <NavHomes />

          {data && (
            <>
              <form>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={data.name ? data.name : ""}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="form-control"
                    id="updateinputName"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={data.email ? data.email : ""}
                    readOnly
                    //   onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email address"
                    className="form-control"
                    id="updateinputEmail"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    value={data.mobile}
                    readOnly
                    //   onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter your Mobile Number"
                    className="form-control"
                    id="updatemobileNumber"
                    style={{ width: "350px" }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="aboutMe" className="form-label">
                    About Me
                  </label>
                  <input
                    type="text"
                    value={data.about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="Enter about yourself"
                    className="form-control"
                    id="updateaboutMe"
                    style={{ width: "350px" }}
                  />
                </div>
                <p className="mb-2">Gender </p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="updateflexRadioDefault1"
                    checked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="updateflexRadioDefault2"
                  />
                  <label
                    className="form-check-label mb-3"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
                <div className="mb-3">
                  <h6 className="mb-3">
                    Select Topic
                    <span style={{ color: "red" }}> *</span>
                  </h6>
                  {/* {console.log(ele)}
                  <MultiSelect
                    options={options}
                    value={
                      data.interstedValue &&
                      options.filter((el) =>
                        data.interstedValue.find((i) => i === el.value)
                      )
                    }
                    onChange={onSelected}
                    // labelledBy="Select"

                    interstedValue
                  /> */}
                </div>

                <div className="mb-3 mt-2">
                  <label htmlFor="Inputpassword" className="form-label">
                    Password <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={data.passWord ? data.passWord : ""}
                    onChange={(e) => setPassWord(e.target.value)}
                    placeholder="Enter password"
                    className="form-control"
                    id="updateInputpassword"
                    style={{ width: "350px" }}
                  />
                </div>

                <button
                  type="submit"
                  onClick={submitData}
                  className="btn btn-primary"
                >
                  Edit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
