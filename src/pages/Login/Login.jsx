import { useContext, useEffect, useState } from "react";
import "./Login.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { text } from "@fortawesome/fontawesome-svg-core";
import { AuthContext } from "../../context/AuthContext";

export function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [type, setType] = useState(true);
  const navigate = useNavigate();
  const { token, loginUser } = useContext(AuthContext);
  const icon = type ? faEyeSlash : faEye;
  const location = useLocation();
  useEffect(() => {
    (async () => {
      loginUser(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);
  if (token) {
    console.log(location);
    navigate(location.state.pathname || "/store", { replace: true });
  }
  function loginHandler() {
    setLoginForm((form) => ({
      ...form,
    }));
  }
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign In</h2>
        </div>
        <div className="login-details">
          <div>
            <label>Email Address</label>
            <input
              placeholder="Email"
              onChange={(e) =>
                setLoginForm((form) => ({ ...form, email: e.target.value }))
              }
            />
          </div>
          <div>
            <label>Password</label>
            <input
              placeholder="Password"
              type={type ? "password" : "text"}
              onChange={(e) =>
                setLoginForm((form) => ({ ...form, password: e.target.value }))
              }
            />
            <FontAwesomeIcon
              icon={icon}
              onClick={() => {
                console.log(type);
                setType(!type);
              }}
            />
          </div>
        </div>
        <div className="login-buttons">
          <button
            onClick={() => {
              loginHandler();
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setLoginForm({
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
              });
            }}
          >
            Login as Guest
          </button>
        </div>
        <p>
          Dont Have an Account
          <NavLink to={"/signup"} state={location}>
            Signup?
          </NavLink>
        </p>
      </div>
    </div>
  );
}
