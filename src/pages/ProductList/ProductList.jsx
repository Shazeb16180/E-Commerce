import "./ProductList.css";
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
import { Filters } from "./components/Filters";
import { ProductListCard } from "./components/ProductListCard";

export function ProductList() {
  return (
    <div className="products">
      <Filters />
      <div className="product-list">
        <ProductListCard
          name={"HeadLight & Lighting"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
        <ProductListCard
          name={"HeadLight & Lighting"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
        <ProductListCard
          name={"HeadLight & Lighting"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
        <ProductListCard
          name={"HeadLight & Lighting"}
          image={
            "https://redparts.webps.info/assets/components/phpthumbof/cache/category-1-200x200.94428279bfba15e90f890abe2b5cc6022.jpg"
          }
        />
      </div>
    </div>
  );
}
