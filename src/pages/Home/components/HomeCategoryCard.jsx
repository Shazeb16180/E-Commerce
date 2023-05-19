import { useContext } from "react";
import { useNavigate } from "react-router";
import { DataContext } from "../../../context/DataContext";

export function HomeCategoryCard({ id, name, image }) {
  const { dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <div
      key={id}
      className="home-category-card"
      onClick={() => {
        dispatch({ type: "CATEGORY", payload: { [name]: true } });
        navigate("/store");
      }}
    >
      <div className="home-image-card">
        <img src={image} alt="loading" />
      </div>
      <h3>{name}</h3>
    </div>
  );
}
