import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [getdatals, setGetdatals] = useState([]);
  useEffect(() => {
    const getdata = localStorage.getItem("detail");
    if (getdata !== null) setGetdatals(JSON.parse(getdata));
  }, []);
  const user = () => {
    const isuser = getdatals.find((el) => el.name === email);
    const ispassword = getdatals.find((el) => el.description === password);
    if (isuser) {
      if (ispassword) {
        toast.success("Successful Login");
        localStorage.setItem("loggedUser", JSON.stringify(isuser));
        localStorage.setItem("link", true);
      } else {
        toast.error("Wrong Password");
      }
      return ispassword;
    } else {
      toast.error("Wrong Email");
    }
    return isuser;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = user();
    if (data) {
      navigate("/home");
    }
  };

  return (
    <>
      <div>
        <form>
          <div className="mb-3">
            <label htmlFor="inputemail">Email</label>
            <input
              className="mx-5"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="inputemail"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="mb-3">
            <label htmlFor="inputpassword">Password</label>
            <input
              className="mx-3"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="inputpassword"
              placeholder="Enter Password"
            ></input>
          </div>
          <div>
            <button type="submit" onClick={onSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
