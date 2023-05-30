import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";

export function Login() {
  const { setLoader } = useContext(DataContext);
  const { token, loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [type, setType] = useState(true);
  const loginHandler = () => {
    setLoginForm((form) => ({
      ...form,
    }));
  };
  const navigate = useNavigate();
  const icon = type ? faEyeSlash : faEye;
  const location = useLocation();
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  useEffect(() => {
    (async () => {
      loginUser(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);
  if (token) {
    navigate(location.state?.pathname || "/store", { replace: true });
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
