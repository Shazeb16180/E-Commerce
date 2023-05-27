import {
  faCartShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import {
  addToCart,
  removeFromCart,
  updateToCart,
} from "../../../services/cartService";
import { DataContext } from "../../../context/DataContext";
import { AuthContext } from "../../../context/AuthContext";
import { isProductInWishlist } from "../../../utils/utils";
import { addToWishList } from "../../../services/wishListService";
import { useNavigate } from "react-router";

export function CartProductCard({ product }) {
  const { state, dispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const { _id, id, src, name, price, rating, qty } = product;
  const navigate = useNavigate();
  const wishListHandler = () =>
    isProductInWishlist(state.wishlist, id)
      ? navigate("/favourite")
      : addToWishList(dispatch, product, token);
  const cartHandler = () => {
    token ? removeFromCart(_id, dispatch, token) : navigate("/login");
  };
  return (
    <div className="cart-product-card">
      <div className="cart-item-image">
        <img src={src} alt="Loading...." />
      </div>
      <div className="cart-product-details">
        <div className="cart-product-details-header">
          <h3>{name}</h3>
          <span>{rating}</span>
          <FontAwesomeIcon icon={faStar} />
          <h3>${price}</h3>
        </div>
        <div>
          Quantity{" "}
          <button
            className="cart-qty-btn"
            onClick={() => {
              updateToCart(dispatch, _id, { type: "increment" }, token);
            }}
          >
            +
          </button>
          <span className="quantity">{qty}</span>
          <button
            className="cart-qty-btn"
            onClick={() => {
              if (qty > 1)
                updateToCart(dispatch, _id, { type: "decrement" }, token);
              else removeFromCart(_id, dispatch, token);
            }}
          >
            -
          </button>
        </div>
        <div className="cart-product-buttons">
          <div className="product-buttons">
            <button
              onClick={() => {
                cartHandler();
              }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
              Remove From Cart
            </button>
            <button onClick={() => wishListHandler()}>
              <FontAwesomeIcon icon={faHeart} />
              {isProductInWishlist(state.wishlist, id)
                ? "Go To WishList"
                : "Add to Favourite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
