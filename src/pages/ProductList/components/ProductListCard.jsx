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
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { AuthContext } from "../../../context/AuthContext";
import {
  addToWishList,
  removeFromWishList,
} from "../../../services/wishListService";
import { toast } from "react-toastify";
import { isProductInCart, isProductInWishlist } from "../../../utils/utils";
import { addToCart } from "../../../services/cartService";

export function ProductListCard({ _id, id, name, image: src, rating, price }) {
  const product = { _id, id, name, src, rating, price };
  const { state, dispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
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

  const isInCart = isProductInCart(state.cart, id);
  const isInWishlist = isProductInWishlist(state.wishlist, id);

  const addToCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dispatch, product, token, toast)
      : navigate("/login");
  };

  const wishlistHandler = () => {
    token
      ? isInWishlist
        ? removeFromWishList(_id, dispatch, token, toast)
        : addToWishList(dispatch, product, token, toast)
      : navigate("/login");
  };
  return (
    <div className="product-list-card">
      <div
        className="favourite"
        onClick={() => {
          wishlistHandler();
        }}
      >
        <FontAwesomeIcon
          className="product-list-fav-icon"
          icon={isInWishlist ? faHeart : farHeart}
          color="#ef233c"
        />
      </div>
      <NavLink to={`/product/${id}`}>
        <div className="product-list-card-image">
          <img src={src} alt="loading" />
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
          <button onClick={() => addToCartHandler()}>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </div>
  );
}
