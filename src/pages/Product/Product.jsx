import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

export function Product() {
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-item-image">
          <img
            src="https://redparts.webps.info/assets/components/phpthumbof/cache/product-4-500x500.8cb26c7720389e626ca4c73f736ce6da43.jpg"
            alt="Loading...."
          />
        </div>
        <div className="product-details">
          <div className="product-details-header">
            <h3>Glossy Gray 19" Aluminium Wheel AR-19</h3>
            <span>4.5</span>
            <FontAwesomeIcon icon={faStar} />
            <h3>$800</h3>
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
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
                Add to Cart
              </button>
              <button>
                <FontAwesomeIcon icon={faHeart} />
                Add to Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
