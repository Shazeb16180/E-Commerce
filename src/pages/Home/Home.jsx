import { NavLink, useNavigate } from "react-router-dom";
import { HomeCategoryCard } from "./components/HomeCategoryCard";
import "./Home.css";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../context/HomeContext";
import { DataContext } from "../../context/DataContext";

export function Home() {
  const { state } = useContext(DataContext);
  return (
    <>
      <section className="home-image-container">
        <div className="home-image"></div>
        <div className="home-image-content">
          <h1>
            Get the Right Part at the Right Price for the Comfort of Your
            Vehicle.
          </h1>
          <NavLink className="home-button-shop">Shop</NavLink>
        </div>
      </section>
      <section className="home-category-heading">
        <h1>POPULAR CATEGORY</h1>
      </section>
      {false ? (
        <div className="loader">
          <img src="/images/Gears.gif" />
        </div>
      ) : (
        <section className="home-category-menu">
          {state.categories.map((category) => {
            return (
              <HomeCategoryCard
                id={category.id}
                name={category.categoryName}
                image={category.src}
              />
            );
          })}
        </section>
      )}
    </>
  );
}
