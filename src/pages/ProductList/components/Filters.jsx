import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";
import { HomeContext } from "../../../context/HomeContext";

export function Filters() {
  const { state, dispatch } = useContext(DataContext);
  const { categories } = useContext(HomeContext);
  return (
    <div className="product-filters">
      <div className="filter-header">
        <h3>Filters</h3>
        <div>
          <button
            onClick={() => {
              dispatch({ type: "RESET" });
            }}
          >
            Clear
          </button>
        </div>
      </div>
      <div className="filter-price">
        <h3>Price</h3>
        <div className="range-label">
          <p className="range-min">0</p>
          <p className="range-mid">50000</p>
          <p className="range-max">100000</p>
        </div>
        <input
          onChange={(event) => {
            console.log(event.target.value);
            dispatch({ type: "PRICE_RANGE", payload: event.target.value });
          }}
          type="range"
          min={0}
          max={100000}
          value={state.priceRange}
        />
      </div>
      <div className="filter-category">
        <h3>Categories</h3>
        {categories.map(({ categoryName }) => (
          <div className="filter-product-category">
            <input
              type="checkbox"
              checked={state.category[categoryName]}
              onClick={(event) => {
                console.log(event.target.checked);
                dispatch({
                  type: "CATEGORY",
                  payload: { [categoryName]: event.target.checked },
                });
              }}
            />
            {categoryName}
          </div>
        ))}
      </div>
      <div className="filter-rating">
        <h3>Rating</h3>
        <div className="filter-product-rating">
          <input
            type="radio"
            name="rating"
            value={4}
            checked={state.rating === "4" ? "true" : ""}
            onClick={(event) => {
              console.log(event.target.value);
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          4 stars & above
        </div>
        <div className="filter-product-rating">
          <input
            type="radio"
            name="rating"
            value={3}
            checked={state.rating === "3" ? "true" : ""}
            onClick={(event) => {
              console.log(event.target.value);
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          3 stars & above
        </div>
        <div className="filter-product-rating">
          <input
            type="radio"
            name="rating"
            value={2}
            checked={state.rating === "2" ? "false" : ""}
            onClick={(event) => {
              console.log(event.target.value);
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          2 stars & above
        </div>
        <div className="filter-product-rating">
          <input
            type="radio"
            name="rating"
            value={1}
            checked={
              state.rating === "1" || state.rating === "false" ? "true" : ""
            }
            onClick={(event) => {
              console.log(event.target.value);
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          1 stars & above
        </div>
      </div>
      <div className="filter-sort">
        <h3>Sort By Price</h3>
        <div className="filter-product-sort">
          <input
            type="radio"
            name="sort"
            value={"L-H"}
            checked={
              state.sort === "None" ? "" : state.sort === "L-H" ? "false" : ""
            }
            onClick={(event) => {
              dispatch({ type: "SORT", payload: event.target.value });
            }}
          />
          price-Low-to-High
        </div>
        <div className="filter-product-sort">
          <input
            type="radio"
            name="sort"
            value={"H-L"}
            checked={
              state.sort === "None" ? "" : state.sort === "H-L" ? "false" : ""
            }
            onClick={(event) => {
              dispatch({ type: "SORT", payload: event.target.value });
            }}
          />
          price-High-to-Low
        </div>
      </div>
    </div>
  );
}
