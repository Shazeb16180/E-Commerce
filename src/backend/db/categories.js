import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Tires & Wheels",
    src: "./public/images/categoryImages/tires&Wheels.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tools & Garage",
    src: "./public/images/categoryImages/tools&Garage.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Oil & Lubricants",
    src: "./public/images/categoryImages/oil&Lubricants.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Interior Parts",
    src: "./public/images/categoryImages/interiorParts.jpg",
  },
  {
    _id: uuid(),
    categoryName: "HeadLights & Lighting",
    src: "./public/images/categoryImages/headlights&Lighting.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Fuel System",
    src: "./public/images/categoryImages/fuelSystem.jpg",
  },

  {
    _id: uuid(),
    categoryName: "Engine & DriveTrain",
    src: "./public/images/categoryImages/engine&Drivetrain.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Body Parts",
    src: "./public/images/categoryImages/bodyParts.jpg",
  },
];
