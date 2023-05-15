import { NavLink } from "react-router-dom";
import { HomeCategoryCard } from "./components/HomeCategoryCard";
import "./Home.css";

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
        <HomeCategoryCard
          name={"Tyres & Wheels"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-5-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
        <HomeCategoryCard
          name={"Engine & DriveTrain"}
          image={
            "https://red-parts.html.themeforest.scompiler.ru/themes/blue-ltr/images/products/product-2-700x700.jpg"
          }
        />
        <HomeCategoryCard
          name={"Interior Accessories"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-4-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
        <HomeCategoryCard
          name={"Body Parts & Mirrors"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-3-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
        <HomeCategoryCard
          name={"Fuel System & Filters"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-2-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />{" "}
        <HomeCategoryCard
          name={"HeadLight & Lighting"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
      </section>
    </>
  );
}
