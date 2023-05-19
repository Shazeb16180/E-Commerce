import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faStar,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";

export function Product() {
  const { productId } = useParams();
  const { products } = useContext(ProductContext);
  console.log(products);
  const { name, src, price } = products.find(({ id }) => id === productId);
  //console.log(product);
  /*console.log(productId)
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await fetch(`/api/products/${productId}`);
    const { product: dbProduct } = await response.json();
    console.log(dbProduct);
  };
  useEffect(() => {
    getData();
  }, []);*/
  return (
    <div className="product-container">
      <div className="product-card">
        <div className="product-item-image">
          <img src={src} alt="Loading...." />
        </div>
        <div className="product-details">
          <div className="product-details-header">
            <h3>{name}</h3>
            <span>4.5</span>
            <FontAwesomeIcon icon={faStar} />
            <h3>{price}</h3>
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
