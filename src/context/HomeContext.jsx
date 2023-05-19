import { createContext, useEffect, useState } from "react";

export const HomeContext = createContext();
export function HomeContextProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const getData = async () => {
    try {
      const response = await fetch("/api/categories");
      const { categories: dbCategories } = await response.json();
      setCategories(dbCategories);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <HomeContext.Provider value={{ categories, loading }}>
      {children}
    </HomeContext.Provider>
  );
}
