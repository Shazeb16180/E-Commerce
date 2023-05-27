import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import {
  faHeart,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
export function Header() {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <nav className="nav-bar">
      <NavLink to={"/"}>
        <h1 className="nav-title">SPARE PARTS</h1>
      </NavLink>
      <ul className="nav-links">
        <div className="search-container">
          <FontAwesomeIcon icon={faSearch} color="#333" />
          <input
            value={state.search}
            onChange={(event) => {
              dispatch({ type: "SEARCH", payload: event.target.value });
              if (event.target.value.trim().length > 0) navigate("/store");
            }}
            placeholder="Search For Parts"
          />
        </div>
        <li>
          <NavLink to={"/store"} className="material-symbols-outlined">
            local_mall
          </NavLink>
        </li>
        <li className="number-logo">
          {state.wishlist.length > 0 && <div>{state.wishlist.length}</div>}
          <NavLink to={"/favourite"}>
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
        </li>
        <li className="number-logo">
          {state.cart.length > 0 && <div>{state.cart.length}</div>}
          <NavLink to={"/cart"}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </li>
        <li>
          <NavLink className="material-symbols-outlined">person</NavLink>
        </li>
      </ul>
    </nav>
  );
}
