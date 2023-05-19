export const initialState = {
  sort: "None",
  priceRange: "50000",
  category: {
    "Tires & Wheels": false,
    "Tools & Garage": false,
    "Oil & Lubricants": false,
    "Interior Parts": false,
    "HeadLights & Lighting": false,
    "Fuel System": false,
    "Engine & DriveTrain": false,
    "Body Parts": false,
  },
  rating: "false",
  products: [],
  cart: [],
  wishlist: [],
  address: [],
  search: "",
};
export function dataReducer(state, action) {
  switch (action.type) {
    case "SEARCH":
      return { ...state, search: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };
    case "PRICE_RANGE":
      return { ...state, priceRange: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    case "CATEGORY":
      return { ...state, category: { ...state.category, ...action.payload } };
    default:
      return initialState;
  }
}
