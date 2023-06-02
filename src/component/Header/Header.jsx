import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, useNavigate } from "react-router-dom";
import {
  faHamburger,
  faHeart,
  faNavicon,
  faSearch,
  faShoppingBag,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
export function Header() {
  const { state, dispatch, drawer, setDrawer } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      {window.location.href.includes("/store") && (
        <button
          className="nav-button"
          onClick={() => {
            setDrawer(!drawer);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faNavicon} />
        </button>
      )}
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
        <li
          className="number-logo"
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          <NavLink to={"/store"} onClick={() => window.scroll({ top: 0 })}>
            <FontAwesomeIcon icon={faShoppingBag} />
          </NavLink>
        </li>
        <li className="number-logo">
          {state.wishlist.length > 0 && <div>{state.wishlist.length}</div>}
          <NavLink to={"/favourite"} onClick={window.scroll({ top: 0 })}>
            <FontAwesomeIcon icon={faHeart} />
          </NavLink>
        </li>
        <li className="number-logo">
          {state.cart.length > 0 && <div>{state.cart.length}</div>}
          <NavLink to={"/cart"} onClick={() => window.scroll({ top: 0 })}>
            <FontAwesomeIcon icon={faShoppingCart} />
          </NavLink>
        </li>
        <li className="number-logo">
          <NavLink to={"/user"}>
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
