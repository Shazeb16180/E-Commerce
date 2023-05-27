import { isProductInCart } from "../utils/utils";

export async function addToCart(
  dispatch,
  product,
  token,
  toast,
  toastSetWhishListBtn
) {
  try {
    const response = await fetch(`/api/user/cart`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    console.log(response);
    if (response.status === 201) {
      const { cart } = await response.json();
      console.log(cart);
      dispatch({ type: "ADD_CART", payload: cart });
      // toast.success("Added To WishList!");
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error");
  }
}

export async function updateToCart(
  dispatch,
  productId,
  action,
  token,
  toast,
  toastSetWhishListBtn
) {
  try {
    const response = await fetch(`/api/user/cart/${productId}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ action }),
    });
    console.log(response);
    if (response.status === 200) {
      const { cart } = await response.json();
      console.log(cart);
      dispatch({ type: "ADD_CART", payload: cart });
      // toast.success("Added To WishList!");
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error");
  }
}
export async function removeFromCart(
  id,
  dispatch,
  token,
  toast,
  toastSetWhishListBtn
) {
  try {
    console.log(id);
    const response = await fetch(`/api/user/cart/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      const { cart } = await response.json();
      console.log(cart);
      dispatch({ type: "REMOVE_CART", payload: cart });
      //  toast.error("Removed From WishList!");
    } else throw error;
  } catch (error) {
    console.error("Error");
  }
}
