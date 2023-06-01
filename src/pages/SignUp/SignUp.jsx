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
  const [type, setType] = useState({ text1: true, text2: true });
  const [signUpForm, setSignUpForm] = useState(signUpFields);
  const icon1 = type.text1 ? faEyeSlash : faEye;
  const icon2 = type.text2 ? faEyeSlash : faEye;
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
                fillFormValue(event, "lastName");
              }}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              placeholder="Email"
              onChange={(event) => {
                fillFormValue(event, "email");
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
                fillFormValue(event, "password");
              }}
            />
            <FontAwesomeIcon
              icon={icon2}
              onClick={() => {
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
