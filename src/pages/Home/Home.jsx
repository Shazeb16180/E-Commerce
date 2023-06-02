import "./Home.css";
import { NavLink, useNavigate } from "react-router-dom";
import { HomeCategoryCard } from "./components/HomeCategoryCard";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

export function Home() {
  const { state, dispatch, setLoader } = useContext(DataContext);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <>
      <section className="home-image-container">
        <div className="home-image"></div>
        <div className="home-image-content">
          <h1>
            Get the Right Part at the Right Price for the Comfort of Your
            Vehicle.
          </h1>
          <NavLink
            to={"/store"}
            onClick={() => dispatch({ type: "RESET" })}
            className="home-button-shop"
          >
            Shop
          </NavLink>
        </div>
      </section>
      <section className="home-category-heading">
        <h1>POPULAR CATEGORY</h1>
      </section>
      <section className="home-category-menu">
        {state.categories.map(({ id, categoryName, src }) => {
          return (
            <HomeCategoryCard
              key={id}
              id={id}
              name={categoryName}
              image={src}
            />
          );
        })}
      </section>
    </>
  );
}
