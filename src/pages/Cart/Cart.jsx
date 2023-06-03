import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faFaceGrimace,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { CartProductCard } from "./components/CartProductCard";

export function Cart() {
  const { state, setLoader, cartState, setCartState, cartData } =
    useContext(DataContext);
  const navigate = useNavigate();
  const { price, discount, deliveryCharges } = cartData;
  const total = price + deliveryCharges - discount;
  const { coupon } = cartState;
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="cart-container">
      <h1 className="cart-heading">My Cart</h1>
      {state.cart.length > 0 ? (
        <div className="cart-products-bill">
          <div className="cart-products">
            {state.cart.map((product) => (
              <CartProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="cart-bill">
            <div className="coupon">
              <div className="coupon-content">
                <FontAwesomeIcon icon={faTag} />
                <span>Have a Coupon ?</span>
              </div>
              <div className="coupon-button">
                <button
                  onClick={() =>
                    setCartState({ ...cartState, couponCard: true })
                  }
                >
                  Apply
                </button>
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
                <div className="cart-price-detail-price">{coupon}%</div>
              </div>
              {coupon === 0
                ? false
                : true && (
                    <div className="cart-price-detail-row">
                      <div>
                        <img className="coupon-img" src="/images/coupon.png" />
                      </div>
                      <div
                        className="cart-price-detail-price"
                        onClick={() =>
                          setCartState({ ...cartState, coupon: 0 })
                        }
                      >
                        <FontAwesomeIcon icon={faClose} />
                      </div>
                    </div>
                  )}
              <div className="cart-price-detail-row-total">
                <div>Total Amount</div>
                <div className="cart-price-detail-price">
                  ${total - total * (coupon / 100)}
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                navigate("/checkout");
                window.scroll({ top: 0 });
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
      <div
        className={`cart-coupon-${cartState.couponCard ? "display" : "none"}`}
      >
        <div className="coupon-card">
          <div
            className="close-symbol"
            onClick={() => setCartState({ ...cartState, couponCard: false })}
          >
            <FontAwesomeIcon icon={faClose} />
          </div>
          <div className="coupon-header">
            <h1>Coupon</h1>
          </div>
          <div className="coupon-body">
            <div className="coupon-body-row">
              <input
                type="radio"
                name="coupon"
                defaultChecked={cartState.coupon === 10 ? true : false}
                onClick={() => setCartState({ ...cartState, coupon: 10 })}
              />
              <p>10% OFF:Holi Dhamaka</p>
            </div>
            <div className="coupon-body-row">
              <input
                type="radio"
                name="coupon"
                defaultChecked={cartState.coupon === 50 ? true : false}
                onClick={() => setCartState({ ...cartState, coupon: 50 })}
              />
              <p>50% OFF:NEW USER</p>
            </div>
            <div className="cp-button">
              <button
                onClick={() =>
                  setCartState({ ...cartState, couponCard: false })
                }
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
