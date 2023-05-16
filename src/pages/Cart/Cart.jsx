import "./Cart.css";
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

export function Cart() {
  return (
    <div className="cart-container">
      <h1 className="cart-heading">My Cart</h1>
      <div className="cart-products-bill">
        <div className="cart-products">
          <div className="cart-product-card">
            <div className="cart-item-image">
              <img
                src="https://redparts.webps.info/assets/components/phpthumbof/cache/product-4-500x500.8cb26c7720389e626ca4c73f736ce6da43.jpg"
                alt="Loading...."
              />
            </div>
            <div className="cart-product-details">
              <div className="cart-product-details-header">
                <h3>Glossy Gray 19" Aluminium Wheel AR-19</h3>
                <span>4.5</span>
                <FontAwesomeIcon icon={faStar} />
                <h3>$800</h3>
              </div>
              <div className="cart-product-buttons">
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
                    Remove from Cart
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
              <div className="cart-price-detail-price">$500</div>
            </div>
            <div className="cart-price-detail-row">
              <div>Discount</div>
              <div className="cart-price-detail-price">$500</div>
            </div>
            <div className="cart-price-detail-row">
              <div>Delivery Charges</div>
              <div className="cart-price-detail-price">$500</div>
            </div>
            <div className="cart-price-detail-row">
              <div>Coupon Discount</div>
              <div className="cart-price-detail-price">$500</div>
            </div>
            <div className="cart-price-detail-row-total">
              <div>Total Amount</div>
              <div className="cart-price-detail-price">$500</div>
            </div>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
