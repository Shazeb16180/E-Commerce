import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

export function Filters() {
  const { state, dispatch, drawer } = useContext(DataContext);
  return (
    <div className={`product-filters trans-${drawer ? "on" : "off"}`}>
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
          <p className="range-mid">2500</p>
          <p className="range-max">5000</p>
        </div>
        <input
          onChange={(event) => {
            dispatch({ type: "PRICE_RANGE", payload: event.target.value });
          }}
          type="range"
          min={0}
          max={5000}
          value={state.priceRange}
        />
      </div>
      <div className="filter-category">
        <h3>Categories</h3>
        {state.categories.map(({ categoryName }) => (
          <div key={categoryName} className="filter-product-category">
            <input
              type="checkbox"
              defaultChecked={state.category[categoryName]}
              onClick={(event) => {
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
            defaultChecked={state.rating === "4" ? "true" : ""}
            onClick={(event) => {
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
            defaultChecked={state.rating === "3" ? "true" : ""}
            onClick={(event) => {
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
            defaultChecked={state.rating === "2" ? "false" : ""}
            onClick={(event) => {
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
            defaultChecked={
              state.rating === "1" || state.rating === "false" ? "true" : ""
            }
            onClick={(event) => {
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
            defaultChecked={
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
            defaultChecked={
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
