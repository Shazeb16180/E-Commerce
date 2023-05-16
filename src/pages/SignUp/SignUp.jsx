import { NavLink } from "react-router-dom";

export function SignUp() {
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign Up</h2>
        </div>
        <div className="login-details">
          <div>
            <label>First Name</label>
            <input placeholder="First Name" />
          </div>
          <div>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </div>
          <div>
            <label>Password</label>
            <input placeholder="Password" />
          </div>
          <div>
            <label>Confirm Password</label>
            <input placeholder="Confirm Password" />
          </div>
        </div>
        <div className="login-buttons">
          <button>SignUp</button>
        </div>
      </div>
    </div>
  );
}
