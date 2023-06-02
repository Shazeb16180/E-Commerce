import "./ProductList.css";
import { useContext, useEffect } from "react";
import { Filters } from "./components/Filters";
import { ProductListCard } from "./components/ProductListCard";
import { DataContext } from "../../context/DataContext";
import {
  filterCategories,
  rangeProducts,
  ratingProducts,
  searchProduct,
  sortProducts,
} from "../../utils/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrimace } from "@fortawesome/free-solid-svg-icons";

export function ProductList() {
  const { state, setLoader, drawer, setDrawer } = useContext(DataContext);
  let temproryProducts = searchProduct(state.products, state.search);
  temproryProducts = rangeProducts(temproryProducts, state.priceRange);
  temproryProducts = ratingProducts(temproryProducts, state.rating);
  temproryProducts = sortProducts(state.sort, temproryProducts);
  temproryProducts = filterCategories(
    state.categories,
    temproryProducts,
    state.category
  );
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="products-menu">
      <Filters />
      {temproryProducts.length > 0 ? (
        <div className="product-list">
          {temproryProducts.map(({ _id, id, name, src, rating, price }) => {
            return (
              <ProductListCard
                key={_id}
                _id={_id}
                id={id}
                name={name}
                image={src}
                rating={rating}
                price={price}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-product-list">
          <h1>
            No Items Found <FontAwesomeIcon icon={faFaceGrimace} />
          </h1>
        </div>
      )}
    </div>
  );
}
