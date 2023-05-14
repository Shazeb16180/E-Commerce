import { NavLink } from "react-router-dom";
export function Header() {
  return (
    <nav className="nav-bar">
      <NavLink>
        <h1 className="nav-title">SPARE PARTS</h1>
      </NavLink>
      <ul className="nav-links">
        <li>
          <NavLink className="material-symbols-outlined">Search</NavLink>
        </li>
        <li>
          <NavLink className="material-symbols-outlined" to={"/store"}>
            local_mall
          </NavLink>
        </li>
        <li>
          <NavLink className="material-symbols-outlined" to={"/favourite"}>
            Favorite
          </NavLink>
        </li>
        <li>
          <NavLink className="material-symbols-outlined">shopping_cart</NavLink>
        </li>
        <li>
          <NavLink className="material-symbols-outlined">person</NavLink>
        </li>
      </ul>
    </nav>
  );
}
