import "./Login.css";
import { NavLink } from "react-router-dom";

export function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign In</h2>
        </div>
        <div className="login-details">
          <div>
            <label>Email Address</label>
            <input placeholder="Email" />
          </div>
          <div>
            <label>Password</label>
            <input placeholder="Password" />
          </div>
        </div>
        <div className="login-buttons">
          <button>Login</button>
          <button>Login as Guest</button>
        </div>
        <p>
          Dont Have an Account<NavLink to={"/signup"}> Signup?</NavLink>
        </p>
      </div>
    </div>
  );
}
