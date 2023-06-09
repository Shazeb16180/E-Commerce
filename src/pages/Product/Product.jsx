import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useParams } from "react-router";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { AuthContext } from "../../context/AuthContext";
import { isProductInCart, isProductInWishlist } from "../../utils/utils";
import { addToWishList } from "../../services/wishListService";
import { toast } from "react-toastify";
import { addToCart } from "../../services/cartService";
export function Product() {
  const { state, dispatch, setLoader } = useContext(DataContext);
  const { productId } = useParams();
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const product = state.products.find(({ id }) => id === productId);
  const { id, name, price, src, rating } = product;
  const isInWishlist = isProductInWishlist(state.wishlist, productId);
  const wishListHandler = () => {
    token
      ? isInWishlist
        ? navigate("/favourite")
        : addToWishList(dispatch, product, token, toast)
      : navigate("/login");
  };
  const isInCart = isProductInCart(state.cart, id);
  const addToCartHandler = () => {
    token
      ? isInCart
        ? navigate("/cart")
        : addToCart(dispatch, product, token, toast)
      : navigate("/login");
  };
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-item-image">
          <img src={src} alt="Loading...." />
        </div>
        <div className="product-details">
          <div className="product-details-header">
            <h3>{name}</h3>
            <span>{rating}</span>
            <FontAwesomeIcon icon={faStar} />
            <h3>${price}</h3>
          </div>
          <div className="product-details-body">
            <div className="product-details-perks">
              <div>
                <FontAwesomeIcon icon={faTag} /> Fastest Delivery
              </div>
              <div>
                <FontAwesomeIcon icon={faTag} /> Inclusive of All Taxes
              </div>
              <div>
                <FontAwesomeIcon icon={faTag} /> Cash on Delivery Available
              </div>
            </div>
            <div className="product-details-description">
              <div className="description">
                <div className="description-header">Year</div>
                <div className="description-value">2012,2013</div>
              </div>
              <div className="description">
                <div className="description-header">Make</div>
                <div className="description-value">2012,2013</div>
              </div>
              <div className="description">
                <div className="description-header">Body Style</div>
                <div className="description-value">2012,2013</div>
              </div>
              <div className="description">
                <div className="description-header">Brand</div>
                <div className="description-value">2012,2013</div>
              </div>
            </div>
            <div className="product-buttons">
              <button onClick={() => addToCartHandler()}>
                <FontAwesomeIcon icon={faCartShopping} />
                {isInCart ? "Go To Cart" : "Add To Cart"}
              </button>
              <button onClick={() => wishListHandler()}>
                <FontAwesomeIcon icon={faHeart} />
                {isInWishlist ? "Go To Favourite" : "Add to Favourite"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
