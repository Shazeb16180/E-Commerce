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
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { DataContext } from "../../context/DataContext";
import { HomeContext } from "../../context/HomeContext";

export function ProductList() {
  const { state, wishState, wishDispatch } = useContext(DataContext);
  let temproryProduct = state.products.filter(({ name }) =>
    name.toLowerCase().includes(state.search)
  );
  temproryProduct = temproryProduct.filter(
    ({ price }) => Number(price) < Number(state.priceRange)
  );
  temproryProduct = temproryProduct.filter(
    ({ rating }) =>
      Number(rating) >= Number(state.rating === "false" ? 1 : state.rating)
  );
  switch (state.sort) {
    case "L-H":
      temproryProduct = [...temproryProduct].sort((a, b) => a.price - b.price);
      break;
    case "H-L":
      temproryProduct = [...temproryProduct].sort((a, b) => b.price - a.price);
      break;
    case "None":
      temproryProduct = [...temproryProduct];
      break;
    default:
      temproryProduct = [...temproryProduct];
  }
  const filterCategory = state.categories
    .filter(({ categoryName }) => state.category[categoryName])
    .map(({ categoryName }) => categoryName);
  temproryProduct =
    filterCategory.length > 0
      ? temproryProduct.filter(({ categoryName }) =>
          filterCategory.find((fc) => fc === categoryName) === undefined
            ? false
            : true
        )
      : temproryProduct;
  return (
    <div className="products-menu">
      <Filters />
      {false ? (
        <div className="loader-product-list">
          <img src="/images/Gears.gif" />
        </div>
      ) : (
        <div className="product-list">
          {temproryProduct.map((product) => {
            return (
              <ProductListCard
                _id={product._id}
                id={product.id}
                name={product.name}
                image={product.src}
                rating={product.rating}
                price={product.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
