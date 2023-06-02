import { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../reducer/DataReducer";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [drawer, setDrawer] = useState(false);
  const [loader, setLoader] = useState(false);
  const [cartState, setCartState] = useState({ couponCard: false, coupon: 0 });
  const cartData = {
    price: state.cart.reduce((acc, curr) => {
      return (acc = acc + Number(curr.price) * curr.qty);
    }, 0),
    discount: 200,
    deliveryCharges: 100,
  };
  useEffect(() => {
    (async () => {
      try {
        const response1 = await fetch("/api/categories");
        if (response1.status === 200) {
          const { categories } = await response1.json();
          dispatch({
            type: "CATEGORIES",
            payload: categories,
          });
        } else throw error;

        const response2 = await fetch("/api/products");
        if (response2.status === 200) {
          const { products } = await response2.json();
          dispatch({
            type: "PRODUCTS",
            payload: products,
          });
        } else throw error;
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        loader,
        setLoader,
        drawer,
        setDrawer,
        cartState,
        setCartState,
        cartData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
