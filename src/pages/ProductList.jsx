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

export function ProductList() {
  return (
    <div className="products">
      <div className="product-filters">
        <div className="filter-header">
          <h3>Filters</h3>
          <div>
            <button>Clear</button>
          </div>
        </div>
        <div className="filter-price">
          <h3>Price</h3>
          <div className="range-label">
            <p className="range-min">0</p>
            <p className="range-mid">50000</p>
            <p className="range-max">100000</p>
          </div>
          <input type="range" min={0} max={100000} />
        </div>
        <div className="filter-category">
          <h3>Categories</h3>
          <div className="product-category">
            <input type="checkbox" />
            Tyres & Wheels
          </div>
          <div className="product-category">
            <input type="checkbox" />
            Engine & DriveTrain
          </div>
          <div className="product-category">
            <input type="checkbox" />
            Interior Accessories
          </div>
          <div className="product-category">
            <input type="checkbox" />
            Body Parts & Mirrors
          </div>
          <div className="product-category">
            <input type="checkbox" />
            Fuel System & Filters
          </div>
        </div>
        <div className="filter-rating">
          <h3>Rating</h3>
          <div className="product-rating">
            <input type="radio" name="rating" />4 stars & above
          </div>
          <div className="product-rating">
            <input type="radio" name="rating" />3 stars & above
          </div>
          <div className="product-rating">
            <input type="radio" name="rating" />2 stars & above
          </div>
          <div className="product-rating">
            <input type="radio" name="rating" />1 stars & above
          </div>
        </div>
        <div className="filter-sort">
          <h3>Sort By Price</h3>
          <div className="product-sort">
            <input type="radio" name="sort" />
            price-Low-to-High
          </div>
          <div className="product-sort">
            <input type="radio" name="sort" />
            price-High-to-Low
          </div>
        </div>
      </div>
      <div className="product-list">
        <div className="product-list-card">
          <div className="product-image">
            <img
              src=" https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>HeadLight & Lighting</h3>
          <div className="rating">
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
          <div className="price">
            <h3>$220</h3>
            <div className="cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
        <div className="product-list-card">
          <div className="favourite">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: "red" }}
              onClick={() => console.log(221)}
            />
          </div>
          <div className="product-image">
            <img
              src=" https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>HeadLight & Lighting</h3>
          <div className="rating">
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
          <div className="price">
            <h3>$220</h3>
            <div className="cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
        <div className="product-list-card">
          <div className="favourite">
            <FontAwesomeIcon icon={farHeart} />
          </div>

          <NavLink to={`/product/${1}`}>
            <div className="product-image">
              <img
                src="https://redparts.webps.info/assets/components/phpthumbof/cache/product-17-245x245.d9d987356f81ac80dd5e997b2f64b46520.jpg"
                alt="loading"
              />
            </div>
          </NavLink>
          <h3>HeadLight & Lighting</h3>
          <div className="rating">
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
          <div className="price">
            <h3>$220</h3>
            <div className="cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
        <div className="product-list-card">
          <div className="product-image">
            <img
              src="https://red-parts.html.themeforest.scompiler.ru/themes/blue-ltr/images/products/product-2-700x700.jpg"
              alt="loading"
            />
          </div>
          <h3>HeadLight & Lighting</h3>
          <div className="rating">
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
          <div className="price">
            <h3>$220</h3>
            <div className="cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
        <div className="product-list-card">
          <div className="product-image">
            <img
              src=" https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>HeadLight & Lighting</h3>
          <div className="rating">
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
          <div className="price">
            <h3>$220</h3>
            <div className="cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
        <div className="product-list-card">
          <div className="product-image">
            <img
              src=" https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>HeadLight & Lighting</h3>
          <div className="rating">
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
          <div className="price">
            <h3>$220</h3>
            <div className="cart">
              <button>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
