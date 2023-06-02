export async function addToCart(dispatch, product, token, toast) {
  try {
    const response = await fetch(`/api/user/cart`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    if (response.status === 201) {
      const { cart } = await response.json();
      dispatch({ type: "ADD_CART", payload: cart });
      toast.success("Added To Cart!");
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error", error);
  }
}

export async function updateToCart(dispatch, productId, action, token, toast) {
  try {
    const response = await fetch(`/api/user/cart/${productId}`, {
      method: "POST",
      headers: {
        authorization: token,
      },
      body: JSON.stringify({ action }),
    });
    if (response.status === 200) {
      const { cart } = await response.json();
      console.log(cart);
      dispatch({ type: "ADD_CART", payload: cart });
      toast.info("Updated To Cart!");
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error");
  }
}
export async function removeFromCart(id, dispatch, token, toast) {
  try {
    const response = await fetch(`/api/user/cart/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      const { cart } = await response.json();
      dispatch({ type: "REMOVE_CART", payload: cart });
      toast.error("Removed From Cart!");
    } else throw error;
  } catch (error) {
    console.error("Error");
  }
}
