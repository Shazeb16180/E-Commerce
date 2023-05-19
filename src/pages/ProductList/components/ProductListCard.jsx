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
export function ProductListCard({ id, name, image, rating, price }) {
  const starContent = [
    ...Array.from({ length: rating }, (_, index) => index + 1),
  ].map((rate) => (
    <div>
      <FontAwesomeIcon icon={faStar} />
      <div style={{ textAlign: "center" }}>{rate}</div>
    </div>
  ));
  const unStarLeft = [
    ...Array.from({ length: 5 - rating }, (_, index) => index + 1),
  ];
  const unStarContent = unStarLeft
    .map((num) => starContent.length + num)
    .map((rate) => (
      <div>
        <FontAwesomeIcon icon={farStar} />
        <div style={{ textAlign: "center" }}>{rate}</div>
      </div>
    ));
  return (
    <div className="product-list-card">
      <NavLink to={`/product/${id}`}>
        <div className="product-list-card-image">
          <img src={image} alt="loading" />
        </div>
      </NavLink>
      <h3>{name}</h3>
      <div className="product-list-card-rating">
        {starContent}
        {unStarContent}
      </div>
      <div className="product-list-card-price">
        <h3>${price}</h3>
        <div className="product-list-card-cart">
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}
