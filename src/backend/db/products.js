import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    id: 1,
    name: "Brake Rotor",
    price: "5000",
    src: "/images/tiresWheels/brakeRotor.jpg",
    rating: 4,
    categoryName: "Tires & Wheels",
  },
  {
    _id: uuid(),
    name: "Brandix Brake Kit",
    price: "4000",
    src: "/images/tiresWheels/brandixBrakeKit.jpg",
    rating: 5,
    categoryName: "Tires & Wheels",
  },
  {
    _id: uuid(),
    name: "Glossy Gray Aluminium Wheel",
    price: "2000",
    src: "/images/tiresWheels/glossyGrayAluminiumWheel.jpg",
    rating: 1,
    categoryName: "Tires & Wheels",
  },
  {
    _id: uuid(),
    name: "Adjustable Spanner",
    price: "1000",
    src: "/images/tools&Garage/adjustableSpanner.jpg",
    rating: 4,
    categoryName: "Tools & Garage",
  },
  {
    _id: uuid(),
    name: "Spanner Kit",
    price: "5000",
    src: "/images/tools&Garage/spannerKit.jpg",
    rating: 1,
    categoryName: "Tools & Garage",
  },
  {
    _id: uuid(),
    name: "Wrench",
    price: "2000",
    src: "/images/tools&Garage/wrench.jpg",
    rating: 4,
    categoryName: "Tools & Garage",
  },
  {
    _id: uuid(),
    name: "Coolant",
    price: "4500",
    src: "/images/oil&Libricants/coolant.jpg",
    rating: 4,
    categoryName: "Oil & Lubircants",
  },
  {
    _id: uuid(),
    name: "Diesel Oil",
    price: "4000",
    src: "/images/oil&Libricants/dieselOil.jpg",
    rating: 2,
    categoryName: "Oil & Lubricants",
  },
  {
    _id: uuid(),
    name: "Graphene Ceramic Coating",
    price: "1000",
    src: "/images/oil&Libricants/grapheneCeramicCoating.jpg",
    rating: 5,
    categoryName: "Oil & Lubricants",
  },
  {
    _id: uuid(),
    name: "Back Driver Seat",
    price: "5000",
    src: "/images/interiorParts/backDriverSeat.jpg",
    rating: 4,
    categoryName: "Interior Parts",
  },
  {
    _id: uuid(),
    name: "Car Alarm Along With Charger",
    price: "2000",
    src: "/images/interiorParts/carAlarmCharger.jpg",
    rating: 1,
    categoryName: "interiorParts",
  },
  {
    _id: uuid(),
    name: "Wiper Blades",
    price: "1000",
    src: "/images/interiorParts/wiperBlades.jpg",
    rating: 4,
    categoryName: "Interior Parts",
  },
  {
    _id: uuid(),
    name: "Left HeadLight",
    price: "5000",
    src: "/images/headlights&Lighting/leftHeadLight.jpg",
    rating: 2,
    categoryName: "HeadLights & Lighting",
  },
  {
    _id: uuid(),
    name: "Lumen Custom HeadLight",
    price: "500",
    src: "/images/headlights&Lighting/lumenCustomHeadlight.jpg",
    rating: 3,
    categoryName: "HeadLights & Lighting",
  },
  {
    _id: uuid(),
    name: "Spyder Projector",
    price: "2000",
    src: "/images/headlights&Lighting/spyderProjector.jpg",
    rating: 4,
    categoryName: "HeadLights & Lighting",
  },
  {
    _id: uuid(),
    name: "Fuel Filter",
    price: "1000",
    src: "/images/fuelSystem/fuelFilter.jpg",
    rating: 3,
    categoryName: "Fuel System",
  },
  {
    _id: uuid(),
    name: "Fuel Injector",
    price: "5000",
    src: "/images/fuelSystem/fuelInjector.jpg",
    rating: 4,
    categoryName: "Fuel System",
  },
  {
    _id: uuid(),
    name: "Twin Exhaust Pipe",
    price: "2000",
    src: "/images/fuelSystem/twinExhaustPipe.jpg",
    rating: 4,
    categoryName: "Fuel System",
  },
  {
    _id: uuid(),
    name: "Engine Block",
    price: "5000",
    src: "/images/bodyParts/engineBlock.jpg",
    rating: 4,
    categoryName: "Body Parts",
  },
  {
    _id: uuid(),
    name: "Gear Box",
    price: "3000",
    src: "/images/bodyParts/gearBox.jpg",
    rating: 4,
    categoryName: "Body Parts",
  },
  {
    _id: uuid(),
    name: "Radiator",
    price: "2000",
    src: "/images/bodyParts/radiator.jpg",
    rating: 3,
    categoryName: "Body Parts",
  },
];
