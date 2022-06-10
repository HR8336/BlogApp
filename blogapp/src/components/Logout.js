import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ButtonCss } from "./Login";
import { useLoadingContext } from "react-router-loading";

const Logout = () => {
  const loadingContext = useLoadingContext();
  const navigate = useNavigate();
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loggedUser");
    navigate("/login");
    toast.success("Successfuly loged out!!");
    localStorage.removeItem("email");
    localStorage.removeItem("interestedValue");
    localStorage.removeItem("Role");
    // localStorage.removeItem("SavedBlog");
    localStorage.setItem("isLoggedUser", false);
  };
  loadingContext.done();
  return (
    <>
      <div>
        <ButtonCss className="me-2" onClick={logout}>
          Logout
        </ButtonCss>
      </div>
    </>
  );
};

export default Logout;
