import { useNavigate } from "react-router";

export function wishReducer(wishState, action) {
  switch (action.type) {
    case "ADD_WISHLIST":
      addFavourite(action.payload);
      return wishState;
    case "GET_WISHLIST":
      return getFavourite();
  }
}

const addFavourite = async ({ id, name }) => {
  const nav = useNavigate();
  try {
    const response = await fetch(`/api/user/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("encodedToken"),
      },
      body: JSON.stringify({
        product: { id, name },
      }),
    });
    if (response.status === 201) {
      const { wishlist } = await response.json();
      //console.log(wishlist);
      return wishlist;
    } else {
      console.log("Error ....");
    }
  } catch (error) {
    console.error("Error");
  }
};
const getFavourite = async () => {
  try {
    const response = await fetch(`/api/user/wishlist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("encodedToken"),
      },
    });
    if (response.status === 200) {
      const { wishlist } = await response.json();
      console.log(wishlist);
      return wishlist;
    } else console.log("Error ....");
  } catch (error) {
    console.error("Error");
  }
};
