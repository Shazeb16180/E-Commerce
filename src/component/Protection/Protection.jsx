import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../context/AuthContext";

export function Protection({ children }) {
  const { token } = useContext(AuthContext);
  const location = useLocation();
  return token ? children : <Navigate state={location} to={"/login"} />;
}
