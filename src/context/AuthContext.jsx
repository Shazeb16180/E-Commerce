import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const locatStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(locatStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const { dispatch } = useContext(DataContext);
  const loginUser = async (email, password) => {
    console.log(JSON.stringify({ email, password }));
    if (email && password !== "") {
      try {
        const response = await fetch(`/api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const { status } = response;
        const { foundUser, encodedToken } = await response.json();
        if (status === 200) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(user);
          dispatch({ type: "INTIALIZE_ADDR", payload: foundUser.address });
        } else throw error;
      } catch (error) {
        console.log("Error in Login User", error);
      }
    }
  };
  const signUpUser = async (email, password, firstName, lastName) => {
    try {
      const {
        data: { createdUser, encodedToken },
        status,
      } = await fetch(`/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          firstName: firstName,
          lastName: lastName,
        }),
      });
      if (status === 201) {
        localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
        dispatch({
          type: "INTIALIZE_ADDR",
          payload: foundUser.address,
        });
      }
    } catch (error) {
      console.log("Error in SignUp user", error);
    }
  };

  useEffect(() => {
    if (token) {
      dispatch({
        type: "INTIALIZE_ADDR",
        payload: user.address,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, loginUser, signUpUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
