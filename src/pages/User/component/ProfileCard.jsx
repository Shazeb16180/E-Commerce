import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../../context/AuthContext";
import { DataContext } from "../../../context/DataContext";
import { toast } from "react-toastify";

export function ProfileCard() {
  const { setToken, setUser } = useContext(AuthContext);
  const { dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const logOutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("login");
    dispatch({ type: "LOGOUT" });
    setToken();
    setUser("");
    navigate("/");
    toast.success("Logged Out");
  };
  return (
    <div className="profile-card">
      <div className="details">
        <h3>Profile Details</h3>
        <div className="name-details">
          <div className="main-details">
            <p className="variable">Full Name</p>
            <p className="variable">Email</p>
          </div>
          <div className="main-value">
            <p className="value">Email</p>
            <p className="value">Klaus</p>
          </div>
        </div>
      </div>
      <div className="account-setting">
        <h3>Account Setting</h3>
        <h3>Other Setting</h3>
      </div>
      <div className="btn">
        <button onClick={() => logOutHandler()}>Log Out</button>
      </div>
    </div>
  );
}
