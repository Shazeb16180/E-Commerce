export const initialState = {
  sort: "None",
  priceRange: "2500",
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
  categories: [],
  products: [],
  cart: [],
  wishlist: [],
  address: [
    {
      name: "Klaus",
      houseNo: "8-1-398/A/40 Tolichowki JanakiNagar Colony",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pinCode: "500008",
      phoneNumber: "007",
    },
  ],
  search: "",
  form: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  },
};
export function dataReducer(state, action) {
  switch (action.type) {
    case "PRODUCTS":
      return { ...state, products: action.payload };
    case "CATEGORIES":
      return { ...state, categories: action.payload };
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
    case "FORM":
      return { ...state, form: { ...state.form, ...action.payload } };
    case "ADD_CART":
      return { ...state, cart: [...action.payload] };
    case "REMOVE_CART":
      return { ...state, cart: [...action.payload] };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "ADD_WISHLIST":
      return { ...state, wishlist: [...action.payload] };
    case "REMOVE_WHISLIST":
      return { ...state, wishlist: [...action.payload] };
    case "CLEAR_WISHLIST":
      return { ...state, cart: [] };
    case "INTIALIZE_ADDR":
      return { ...state, address: action.payload };
    case "LOGOUT":
      return {
        ...initialState,
        categories: state.categories,
        products: state.products,
      };
    case "ORDER_SUCCESS":
      return {
        ...initialState,
        categories: state.categories,
        products: state.products,
        address: state.address,
      };
    default:
      return {
        ...initialState,
        categories: state.categories,
        products: state.products,
        cart: state.cart,
        wishlist: state.wishlist,
        form: state.form,
        address: state.address,
      };
  }
}
