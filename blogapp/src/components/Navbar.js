import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import { CgProfile } from "react-icons/cg";
import styled from "styled-components";
import { ButtonCss } from "./Login";

export const Header = styled.nav`

  background: linear-gradient(110deg, #F8C8DC 60%, #f4f5dc 60%);
  text-align: center;
  width: 100%;
  height: auto;
  background-size: cover;
  background-color
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 30%;
`;

const Navbar = () => {
  const location = useLocation();
  const isloggedUser = localStorage.getItem("isLoggedUser");
  const navigate = useNavigate();
  const handleAddBlog = (e) => {
    e.preventDefault();
    navigate("/home/addblog");
  };

  return (
    <>
      <Header className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BlogApp
          </Link>
          <ButtonCss
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </ButtonCss>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-5 mb-lg-0">
              {isloggedUser === "false" ? (
                <>
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/login" ? "active" : ""
                      }`}
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/signup" ? "active" : ""
                      }`}
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/about" ? "active" : ""
                      }`}
                      to="/about"
                    >
                      Contact Us
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item ms-5">
                    <Link
                      className="nav-link active"
                      style={{ marginRight: "90px" }}
                      to="/home/allblog"
                    >
                      All Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      style={{ marginRight: "90px" }}
                      to="/home/myblog"
                    >
                      My Blog
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
                      className="nav-link active"
                      style={{ marginRight: "90px" }}
                      to="/home/saveblog"
                    >
                      Saved Blog
                    </Link>
                  </li>
                  <li className="nav-item">
                    <ButtonCss
                      onClick={handleAddBlog}
                      style={{ marginLeft: "850px" }}
                    >
                      Add Blog
                    </ButtonCss>
                  </li>
                  <li className="nav-item ms-5">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/profile" ? "active" : ""
                      }`}
                      aria-current="page"
                      to="/profile"
                    >
                      <CgProfile
                        style={{
                          height: "40px",
                          width: "40px",
                        }}
                      />
                    </Link>
                  </li>

                  <li className="nav-item ms-5">
                    <Logout />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Header>
    </>
  );
};

export default Navbar;
