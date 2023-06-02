import "./Login.css";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";

export function Login() {
  const { setLoader } = useContext(DataContext);
  const { token, loginUser } = useContext(AuthContext);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const loginHandler = (e) => {
    e?.preventDefault();
    (async () => {
      loginUser(
        loginForm.email,
        loginForm.password,
        location.state?.pathname || "/store",
        { replace: true }
      );
    })();
  };
  const location = useLocation();
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  /*useEffect(() => {
    (async () => {
      loginUser(loginForm.email, loginForm.password);
    })();
  }, [loginForm.email, loginForm.password]);*/
  /*if (token) {
    navigate(location.state?.pathname || "/store", { replace: true });
  }*/
  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={(e) => loginHandler(e)}>
          <div className="login-header">
            <h2>Sign In</h2>
          </div>
          <div className="login-details">
            <div>
              <label>Email Address</label>
              <input
                placeholder="Email"
                required={true}
                onChange={(e) =>
                  setLoginForm((form) => ({ ...form, email: e.target.value }))
                }
              />
            </div>
            <div>
              <label>Password</label>
              <input
                placeholder="Password"
                required={true}
                type={"password"}
                onChange={(e) => {
                  setLoginForm((form) => ({
                    ...form,
                    password: e.target.value,
                  }));
                }}
              />
            </div>
          </div>
          <div className="login-buttons">
            <button>Login</button>
            <button
              type="reset"
              onClick={() => {
                (async () => {
                  loginUser(
                    "adarshbalika@gmail.com",
                    "adarshbalika",
                    location.state?.pathname || "/store",
                    { replace: true }
                  );
                })();
              }}
            >
              Login as Guest
            </button>
          </div>
        </form>
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
