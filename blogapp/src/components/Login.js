import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [emailofLogin, setEmailofLogin] = useState("");
  const [passwordofLogin, setpasswordofLogin] = useState("");
  const [getdatals, setGetdatals] = useState([]);
  // const [interestofLogged , setInterestofLogged] = useState([]);

  useEffect(() => {
    const getdata = localStorage.getItem("detail");
    if (getdata !== null) setGetdatals(JSON.parse(getdata));
  }, []);
  // const adminEmail = ["harsh.zadafiya@portpro.io"];
  // const adminPassword = ["123456"];
  // console.log("adminEmail", adminEmail[0]);
  // console.log("adminPassword", adminPassword[0]);
  // const admin = () => {
  const adminEmail = ["harsh.zadafiya@portpro.io"];
  const adminPassword = ["12345"];

  // const isAdmin = getdatals.find(
  //     (el) => el.email === (adminEmail
  //   );
  //   return isAdmin;
  // };

  const user = () => {
    const isUser = getdatals.find(
      (el) =>
        (el.email === emailofLogin || el.mobile === emailofLogin) &&
        el.passWord === passwordofLogin
    );

    if (isUser) {
      localStorage.setItem("loggedUser", JSON.stringify(isUser));
      toast.success("Successful Login");
      localStorage.setItem("email", JSON.stringify(emailofLogin));
      localStorage.setItem("Role", "User");
    } else {
      toast.error("Wrong Email or Password!!");
    }
    return isUser;
  };

  const logoutPage = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  const loginPage = (e) => {
    e.preventDefault();
    const data = user();
    // const adminofdata = admin();

    if (
      emailofLogin === adminEmail[0] &&
      passwordofLogin === adminPassword[0]
    ) {
      navigate("/admin");
      localStorage.setItem("Role", "Admin");
      localStorage.setItem("isLoggedUser", true);
    } else if (data) {
      navigate("/home/allblog");
      localStorage.setItem("isLoggedUser", true);
    }
  };
  const onEmail = (e) => {
    setEmailofLogin(e.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">
          Username<span style={{ color: "red" }}> *</span>
        </label>
        <input
          type="email"
          value={emailofLogin}
          onChange={onEmail}
          placeholder="Enter Your Email address or Mobile number"
          className="form-control"
          id="inputEmail"
          style={{ width: "350px" }}
        />
        <div className="mb-3 mt-2">
          <label htmlFor="Inputpassword" className="form-label">
            Password<span style={{ color: "red" }}> *</span>
          </label>
          <input
            type="password"
            value={passwordofLogin}
            onChange={(e) => {
              setpasswordofLogin(e.target.value);
            }}
            placeholder="Enter password"
            className="form-control"
            id="Inputpassword"
            style={{ width: "350px" }}
          />
        </div>
        <button className="btn btn-primary ms-2" onClick={loginPage}>
          Login
        </button>
        <div className="mb-3 mt-2">
          <p className="form-label">
            You don't have account ?
            <button className="btn btn-primary ms-2" onClick={logoutPage}>
              SignUp
            </button>
          </p>
        </div>
      </div>
      <div>
        <p>
          <span style={{ color: "red" }}>*</span>Required Field
        </p>
      </div>
    </>
  );
};

export default Login;
