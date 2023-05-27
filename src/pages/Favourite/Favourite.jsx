import "./Favourite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faHeart,
  faTag,
  faSadCry,
  faFaceSadCry,
  faFaceGrimace,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as farStar,
  faHeart as farHeart,
} from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { FavouriteCard } from "./component/FavouriteCard";

export function Favourite() {
  const { state, dispatch } = useContext(DataContext);
  return (
    <div className="favourite-container">
      <h1 className="favourite-heading">Favourite</h1>
      <div className="favourite-items">
        {state.wishlist.length > 0 ? (
          state.wishlist.map((product) => <FavouriteCard product={product} />)
        ) : (
          <div className="empty-wishlist">
            <h1>
              Your Wish List is Empty <FontAwesomeIcon icon={faFaceGrimace} />
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
