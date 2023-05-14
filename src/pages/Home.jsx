import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <>
      <section className="image-container">
        <div className="image"></div>
        <div className="image-content">
          <h1>
            Get the Right Part at the Right Price for the Comfort of Your
            Vehicle.
          </h1>
          <NavLink className="button-shop">Shop</NavLink>
        </div>
      </section>
      <section className="category-heading">
        <h1>POPULAR CATEGORY</h1>
      </section>
      <section className="home-category-menu">
        <div className="home-category-card">
          <div className="home-image">
            <img
              src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-5-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>Tyres & Wheels</h3>
        </div>
        <div className="home-category-card">
          <div className="home-image">
            <img
              src="https://red-parts.html.themeforest.scompiler.ru/themes/blue-ltr/images/products/product-2-700x700.jpg"
              alt="loading"
            />
          </div>
          <h3>Engine & DriveTrain</h3>
        </div>
        <div className="home-category-card">
          <div className="home-image">
            <img
              src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-4-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>Interior Accessories</h3>
        </div>
        <div className="home-category-card">
          <div className="home-image">
            <img
              src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-3-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>Body Parts & Mirrors</h3>
        </div>
        <div className="home-category-card">
          <div className="home-image">
            <img
              src="https://redparts.webps.info/assets/components/phpthumbof/cache/category-2-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>Fuel System & Filters</h3>
        </div>
        <div className="home-category-card">
          <div className="home-image">
            <img
              src=" https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
              alt="loading"
            />
          </div>
          <h3>HeadLight & Lighting</h3>
        </div>
      </section>
    </>
  );
}
