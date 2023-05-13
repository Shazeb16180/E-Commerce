import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <NavLink>
          <h1 className="nav-title">SPARE PARTS</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink className="material-symbols-outlined">Search</NavLink>
          </li>
          <li>
            <NavLink className="material-symbols-outlined">local_mall</NavLink>
          </li>
          <li>
            <NavLink className="material-symbols-outlined">Favorite</NavLink>
          </li>
          <li>
            <NavLink className="material-symbols-outlined">
              shopping_cart
            </NavLink>
          </li>
          <li>
            <NavLink className="material-symbols-outlined">person</NavLink>
          </li>
        </ul>
      </nav>
      <div className="image-container">
        <div className="image"></div>
        <div className="image-content">
          <h1>
            Get the Right Part at the Right Price for the Comfort of Your
            Vehicle.
          </h1>
          <NavLink className="button-shop">Shop</NavLink>
        </div>
      </div>
      <div className="category">
        <h1>POPULAR CATEGORY</h1>
      </div>
      <div className="category-menu">
        <div className="category-card">
          <img
            src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-5-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
            alt="loading"
          />
          <h3>Tyres & Wheels</h3>
        </div>
        <div className="category-card">
          <img
            src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-6-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
            alt="loading"
          />
          <h3>Engine & DriveTrain</h3>
        </div>
        <div className="category-card">
          <img
            src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-4-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
            alt="loading"
          />
          <h3>Interior Accessories</h3>
        </div>
        <div className="category-card">
          <img
            src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-3-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
            alt="loading"
          />
          <h3>Body Parts & Mirrors</h3>
        </div>
        <div className="category-card">
          <img
            src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-2-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
            alt="loading"
          />
          <h3>Fuel System & Filters</h3>
        </div>
        <div className="category-card">
          <img
            src=" https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
            alt="loading"
          />
          <h3>HeadLight & Lighting</h3>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <a href="./" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "white" }}
            />
          </a>
          <a href="./" target="_blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              style={{ color: "white" }}
            />
          </a>
          <a href="./" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2xl"
              style={{ color: "white" }}
            />
          </a>
        </div>
        <div className="copy-right">No Copy Right....</div>
      </footer>
    </div>
  );
}

export default App;
