import { createContext, useEffect, useReducer, useState } from "react";
import { dataReducer, initialState } from "../reducer/DataReducer";
import { useLocation, useNavigate } from "react-router";
import { wishReducer } from "../reducer/WishReducer";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [wishState, wishDispatch] = useReducer(wishReducer, []);
  console.log(state);
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
        wishState,
        wishDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
