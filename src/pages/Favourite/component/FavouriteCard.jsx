import { useContext } from "react";
import { removeFromWishList } from "../../../services/wishListService";
import { DataContext } from "../../../context/DataContext";
import { isProductInCart, isProductInWishlist } from "../../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
import { addToCart } from "../../../services/cartService";
import { useNavigate } from "react-router";

export function FavouriteCard({ product }) {
  const { _id, id, name, src, rating, price } = product;
  const { state, dispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const cartHandler = () =>
    isProductInCart(state.cart, id)
      ? navigate("/cart")
      : addToCart(dispatch, product, token);
  const wishlistHandler = () => {
    token
      ? removeFromWishList(_id, dispatch, token, toast)
      : navigate("/login");
  };
  return (
    <div className="favourite-product-card">
      <div className="favourite-item-image">
        <img src={src} alt="Loading...." />
      </div>
      <div className="favourite-product-details">
        <div className="favourite-product-details-header">
          <h3>{name}</h3>
          <span>{rating}</span>
          <FontAwesomeIcon icon={faStar} />
          <h3>${price}</h3>
        </div>
        <div className="favourite-product-buttons">
          <div className="product-buttons">
            <button onClick={() => cartHandler()}>
              <FontAwesomeIcon icon={faCartShopping} />
              {isProductInCart(state.cart, id) ? "Go To Cart" : "Add to Cart"}
            </button>
            <button onClick={() => wishlistHandler()}>
              <FontAwesomeIcon icon={faHeart} />
              {"Remove From Favourite"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
