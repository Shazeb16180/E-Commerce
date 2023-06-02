import { createContext, useContext, useEffect, useState } from "react";
import { DataContext } from "./DataContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const locatStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(locatStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const { dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const loginUser = async (email, password, location) => {
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
          setUser(foundUser);
          dispatch({ type: "ADD_CART", payload: foundUser.cart });
          dispatch({ type: "ADD_WISHLIST", payload: foundUser.wishlist });
          navigate(location);
          toast.success("Login Success");
        } else throw error;
      } catch (error) {
        console.log("Error in Login User");
        toast.error("Invalid Credentials");
      }
    }
  };
  const signUpUser = async (email, password, firstName, lastName) => {
    try {
      const response = await fetch(`/api/auth/signup`, {
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
      const { status } = response;
      if (status === 201) {
        toast.success("User Created Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error in SignUp user", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, loginUser, signUpUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
