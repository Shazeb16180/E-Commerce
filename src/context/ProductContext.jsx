import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
export function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    const response = await fetch("/api/products");
    const { products: dbProducts } = await response.json();
    //console.log(await response.json());
    setProducts(dbProducts);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
}
