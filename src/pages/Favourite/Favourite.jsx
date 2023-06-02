import "./Favourite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrimace } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { FavouriteCard } from "./component/FavouriteCard";

export function Favourite() {
  const { state, setLoader } = useContext(DataContext);
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, []);
  return (
    <div className="favourite-container">
      <h1 className="favourite-heading">Favourite</h1>
      <div className="favourite-items">
        {state.wishlist.length > 0 ? (
          state.wishlist.map((product) => (
            <FavouriteCard key={product.id} product={product} />
          ))
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
