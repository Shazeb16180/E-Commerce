export function FavouriteCard() {
  return (
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
  );
}
