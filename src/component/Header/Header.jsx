import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <nav className="nav-bar">
      <NavLink to={"/"}>
        <h1 className="nav-title">SPARE PARTS</h1>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink className="material-symbols-outlined">Search</NavLink>
        </li>
        <li>
          <NavLink to={"/store"} className="material-symbols-outlined">
            local_mall
          </NavLink>
        </li>
        <li>
          <NavLink to={"/favourite"} className="material-symbols-outlined">
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"} className="material-symbols-outlined">
            shopping_cart
          </NavLink>
        </li>
        <li>
          <NavLink className="material-symbols-outlined">person</NavLink>
        </li>
      </ul>
    </nav>
  );
}
