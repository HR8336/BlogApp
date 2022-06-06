import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import NavHomes from "./NavHomes";

const Profile = () => {
  const options = [
    { label: "Sport", value: "Sport" },
    { label: "Food", value: "Food" },
    { label: "Travel", value: "Travel" },
    { label: "Fashion", value: "Fashion" },
    { label: "Health", value: "Health" },
  ];

  const [getDataAdd, setGetDataAdd] = useState([]);
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [mobile, setMobile] = useState("");
  const [passWord, setPassWord] = useState("");
  const [selected, setSelected] = useState([]);

  const dataFromAdd = JSON.parse(localStorage.getItem("detail"));
  const getmail = JSON.parse(localStorage.getItem("email"));
  useEffect(() => {
    const dataFromAdd = JSON.parse(localStorage.getItem("detail"));
    const getmail = JSON.parse(localStorage.getItem("email"));

    const filterdData = dataFromAdd.filter((ele) => ele.email === getmail);

    setGetDataAdd(filterdData);
  }, []);

  const onSelected = (data) => {
    setSelected(data);
  };

  const submitData = (e) => {
    e.preventDefault();

    const updateData = dataFromAdd.map((ele) => {
      if (ele.email === getmail)
        return {
          ...ele,
          name: name,
          about: about,
          mobile: mobile,
          passWord: passWord,
          interstedValue: selected.map((el) => el.value),
        };
      return ele;
    });
    localStorage.setItem("detail", JSON.stringify(updateData));
  };

  return (
    <>
      <div>
        <div>
          <NavHomes />
          {getDataAdd.length !== 0 ? (
            <>
              <div>
                {getDataAdd.map((ele, id) => {
                  return (
                    <form key={id}>
                      <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">
                          Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          value={ele.name}
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
                          value={ele.email}
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
                          value={ele.mobile}
                          onChange={(e) => setMobile(e.target.value)}
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
                          value={ele.about}
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
                          defaultChecked
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
                          Select Topic<span style={{ color: "red" }}> *</span>
                        </h6>
                        <MultiSelect
                          options={options}
                          value={options.filter((el) =>
                            ele.interstedValue.find((i) => i === el.value)
                          )}
                          onChange={onSelected}
                        />
                      </div>

                      <div className="mb-3 mt-2">
                        <label htmlFor="Inputpassword" className="form-label">
                          Password <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                          type="text"
                          value={ele.passWord}
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
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div>No Profile</div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Profile;
