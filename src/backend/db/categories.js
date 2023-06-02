import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */
export const categories = [
  {
    _id: uuid(),
    categoryName: "Tires & Wheels",
    src: "/images/categoryImages/tires&Wheels.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tools & Garage",
    src: "./images/categoryImages/tools&Garage.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Oil & Lubricants",
    src: "/images/categoryImages/oil&Lubricants.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Interior Parts",
    src: "/images/categoryImages/interiorParts.jpg",
  },
  {
    _id: uuid(),
    categoryName: "HeadLights & Lighting",
    src: "/images/categoryImages/headlights&Lighting.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Fuel System",
    src: "/images/categoryImages/fuelSystem.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Engine & DriveTrain",
    src: "/images/categoryImages/engine&Drivetrain.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Body Parts",
    src: "/images/categoryImages/bodyParts.jpg",
  },
];
