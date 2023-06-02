import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

export function SignUp() {
  const signUpFields = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const { token, signUpUser } = useContext(AuthContext);
  const { setLoader } = useContext(DataContext);
  const [signUpForm, setSignUpForm] = useState(signUpFields);
  const navigate = useNavigate();
  const signUpHandler = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = signUpForm;
    if (email && password && firstName && lastName !== "") {
      (async () => {
        signUpUser(email, password, firstName, lastName);
      })();
    }
  };
  const fillFormValue = (event, fieldName) => {
    const { value } = event.target;
    setSignUpForm((prev) => ({ ...prev, [fieldName]: value }));
  };

  if (token) {
    //console.log("signup");
    navigate("/store");
  }
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return (
    <div className="login-container">
      <div className="login-card">
        <form onSubmit={(e) => signUpHandler(e)}>
          <div className="login-header">
            <h2>Sign Up</h2>
          </div>
          <div className="login-details">
            <div>
              <label>First Name</label>
              <input
                placeholder="First Name"
                required={true}
                onChange={(event) => fillFormValue(event, "firstName")}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                required={true}
                onChange={(event) => {
                  fillFormValue(event, "lastName");
                }}
              />
            </div>
            <div>
              <label>Email</label>
              <input
                placeholder="Email"
                required={true}
                onChange={(event) => {
                  fillFormValue(event, "email");
                }}
              />
            </div>
            <div>
              <label>Password</label>
              <input placeholder="Password" required={true} type={"password"} />
            </div>
            <div>
              <label>Confirm Password</label>
              <input
                placeholder="Password"
                required={true}
                type={"password"}
                onChange={(event) => {
                  fillFormValue(event, "password");
                }}
              />
            </div>
          </div>
          <div className="login-buttons">
            <button type="submit">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
}
