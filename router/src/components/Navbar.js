import { NavLink } from "react-router-dom";

function Navbar() {
  const link1 = localStorage.getItem("link");
  console.log(link1);

  return (
    <>
      <nav className="navbar">
        {link1 === "false" ? (
          <>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return { color: isActive ? "black" : " " };
              }}
            >
              Login
            </NavLink>{" "}
          </>
        ) : (
          <>
            <NavLink
              to="/home"
              style={({ isActive }) => {
                return { color: isActive ? "black" : " " };
              }}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => {
                return { color: isActive ? "black" : " " };
              }}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => {
                return { color: isActive ? "black" : " " };
              }}
            >
              Contact Us
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
