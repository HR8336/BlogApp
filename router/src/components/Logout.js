import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();
  const logoutBtn = (e) => {
    e.preventDefault();
    navigate("/");
    localStorage.removeItem("loggedUser");
    localStorage.setItem("link", false);
  };
  return (
    <div>
      <button type="button" onClick={logoutBtn}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
