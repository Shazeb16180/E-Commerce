import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
export function ProductListCard({ name, image }) {
  return (
    <div className="product-list-card">
      <div className="product-list-card-image">
        <img src={image} alt="loading" />
      </div>
      <h3>{name}</h3>
      <div className="product-list-card-rating">
        <div>
          <FontAwesomeIcon icon={farStar} />
          <div style={{ textAlign: "center" }}>1</div>
        </div>
        <div>
          <FontAwesomeIcon icon={farStar} />
          <div style={{ textAlign: "center" }}>2</div>
        </div>
        <div>
          <FontAwesomeIcon icon={farStar} />
          <div style={{ textAlign: "center" }}>3</div>
        </div>
      </div>
      <div className="product-list-card-price">
        <h3>$220</h3>
        <div className="product-list-card-cart">
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}
