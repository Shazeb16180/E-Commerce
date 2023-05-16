export function Filters() {
  return (
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
        <div className="filter-product-category">
          <input type="checkbox" />
          Tyres & Wheels
        </div>
        <div className="filter-product-category">
          <input type="checkbox" />
          Engine & DriveTrain
        </div>
        <div className="filter-product-category">
          <input type="checkbox" />
          Interior Accessories
        </div>
        <div className="filter-product-category">
          <input type="checkbox" />
          Body Parts & Mirrors
        </div>
        <div className="filter-product-category">
          <input type="checkbox" />
          Fuel System & Filters
        </div>
      </div>
      <div className="filter-rating">
        <h3>Rating</h3>
        <div className="filter-product-rating">
          <input type="radio" name="rating" />4 stars & above
        </div>
        <div className="filter-product-rating">
          <input type="radio" name="rating" />3 stars & above
        </div>
        <div className="filter-product-rating">
          <input type="radio" name="rating" />2 stars & above
        </div>
        <div className="filter-product-rating">
          <input type="radio" name="rating" />1 stars & above
        </div>
      </div>
      <div className="filter-sort">
        <h3>Sort By Price</h3>
        <div className="filter-product-sort">
          <input type="radio" name="sort" />
          price-Low-to-High
        </div>
        <div className="filter-product-sort">
          <input type="radio" name="sort" />
          price-High-to-Low
        </div>
      </div>
    </div>
  );
}
