import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";

export function SignUp() {
  const [type, setType] = useState({ text1: true, text2: true });
  const icon1 = type.text1 ? faEyeSlash : faEye;
  const icon2 = type.text2 ? faEyeSlash : faEye;
  const signUpFields = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [signUpForm, setSignUpForm] = useState(signUpFields);
  const { token, signUpUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const signUpHandler = () => {
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
    navigate("/product");
  }

  //const { handleSignUp, dispatch } = useContext(DataContext);
  const location = useLocation();
  console.log(location);

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Sign Up</h2>
        </div>
        <div className="login-details">
          <div>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={(event) => fillFormValue(event, "firstName")}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={(event) => {
                (event) => fillFormValue(event, "lastName");
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={(event) => {
                (event) => fillFormValue(event, "email");
              }}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              placeholder="Password"
              type={type.text1 ? "password" : "text"}
            />
            <FontAwesomeIcon
              icon={icon1}
              onClick={() => {
                console.log(type);
                setType({ ...type, text1: !type.text1 });
              }}
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              placeholder="Password"
              type={type.text2 ? "password" : "text"}
              onChange={(event) => {
                (event) => fillFormValue(event, "password");
              }}
            />
            <FontAwesomeIcon
              icon={icon2}
              onClick={() => {
                console.log(type);
                setType({ ...type, text2: !type.text2 });
              }}
            />
          </div>
        </div>
        <div className="login-buttons">
          <button onClick={() => signUpHandler()}>SignUp</button>
        </div>
      </div>
    </div>
  );
}
