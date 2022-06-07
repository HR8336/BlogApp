import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonCss } from "./Login";

const NavHomes = () => {
  const navigate = useNavigate();
  const handleAddBlog = (e) => {
    e.preventDefault();
    navigate("/home/addblog");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
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
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={{ marginRight: "90px" }}
                to="/home/saveblog"
              >
                Saved Blog
              </Link>
            </li>

            <li className="nav-item">
              <ButtonCss onClick={handleAddBlog}>Add Blog</ButtonCss>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavHomes;
