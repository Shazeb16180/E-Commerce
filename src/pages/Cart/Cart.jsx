import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faHeart,
  faTag,
  faFaceGrimace,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { CartProductCard } from "./components/CartProductCard";

export function Cart() {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  const price = state.cart.reduce((acc, curr) => {
    return (acc = acc + Number(curr.price) * curr.qty);
  }, 0);
  const discount = 200;
  const deliveryCharges = 100;
  const couponDiscount = 100;
  const total = price + deliveryCharges - (discount + couponDiscount);
  return (
    <div className="cart-container">
      <h1 className="cart-heading">My Cart</h1>
      {state.cart.length > 0 ? (
        <div className="cart-products-bill">
          <div className="cart-products">
            {state.cart.map((product) => (
              <CartProductCard product={product} />
            ))}{" "}
          </div>
          <div className="cart-bill">
            <div className="coupon">
              <div className="coupon-content">
                <FontAwesomeIcon icon={faTag} />
                <span>Have a Coupon ?</span>
              </div>
              <div className="coupon-button">
                <button>Apply</button>
              </div>
            </div>
            <h3>Price Details</h3>
            <div className="cart-price-details">
              <div className="cart-price-detail-row">
                <div>Price</div>
                <div className="cart-price-detail-price">${price}</div>
              </div>
              <div className="cart-price-detail-row">
                <div>Discount</div>
                <div className="cart-price-detail-price">${discount}</div>
              </div>
              <div className="cart-price-detail-row">
                <div>Delivery Charges</div>
                <div className="cart-price-detail-price">
                  ${deliveryCharges}
                </div>
              </div>
              <div className="cart-price-detail-row">
                <div>Coupon Discount</div>
                <div className="cart-price-detail-price">${couponDiscount}</div>
              </div>
              <div className="cart-price-detail-row-total">
                <div>Total Amount</div>
                <div className="cart-price-detail-price">${total}</div>
              </div>
            </div>
            <button
              onClick={() => {
                console.log("T");
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-wishlist">
          <h1>
            Your Cart is Empty <FontAwesomeIcon icon={faFaceGrimace} />
          </h1>
        </div>
      )}
    </div>
  );
}
