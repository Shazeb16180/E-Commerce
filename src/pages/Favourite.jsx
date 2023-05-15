import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faHeart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

export function Favourite() {
  return (
    <div className="favourite-container">
      <h1 className="favourite-heading">Favourite</h1>
      <div className="favourite-items">
        <div className="product-card">
          <div className="favourite-item-image">
            <img
              src="https://redparts.webps.info/assets/components/phpthumbof/cache/product-4-500x500.8cb26c7720389e626ca4c73f736ce6da43.jpg"
              alt="Loading...."
            />
          </div>
          <div className="product-details">
            <div className="favourite-product-details-header">
              <h3>Glossy Gray 19" Aluminium Wheel AR-19</h3>
              <span>4.5</span>
              <FontAwesomeIcon icon={faStar} />
              <h3>$800</h3>
            </div>
            <div className="product-details-container">
              <div className="product-buttons">
                <button>
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                  Remove from Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-card">
          <div className="favourite-item-image">
            <img
              src="https://redparts.webps.info/assets/components/phpthumbof/cache/product-4-500x500.8cb26c7720389e626ca4c73f736ce6da43.jpg"
              alt="Loading...."
            />
          </div>
          <div className="product-details">
            <div className="favourite-product-details-header">
              <h3>Glossy Gray 19" Aluminium Wheel AR-19</h3>
              <span>4.5</span>
              <FontAwesomeIcon icon={faStar} />
              <h3>$800</h3>
            </div>
            <div className="product-details-container">
              <div className="product-buttons">
                <button>
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>
                <button>
                  <FontAwesomeIcon icon={faHeart} />
                  Remove from Favourite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
