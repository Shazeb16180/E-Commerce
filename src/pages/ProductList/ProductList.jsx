import "./ProductList.css";
import { useContext, useEffect } from "react";
import { Filters } from "./components/Filters";
import { ProductListCard } from "./components/ProductListCard";
import { DataContext } from "../../context/DataContext";

export function ProductList() {
  const { state, setLoader } = useContext(DataContext);
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
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="products-menu">
      <Filters />
      <div className="product-list">
        {temproryProduct.map(({ _id, id, name, src, rating, price }) => {
          return (
            <ProductListCard
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
    </div>
  );
}
