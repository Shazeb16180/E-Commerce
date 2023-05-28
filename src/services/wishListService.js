export async function addToWishList(
  dispatch,
  product,
  token,
  toast,
  toastSetWhishListBtn
) {
  try {
    const response = await fetch(`/api/user/wishlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ product }),
    });
    if (response.status === 201) {
      const { wishlist } = await response.json();
      console.log(wishlist);
      dispatch({ type: "ADD_WISHLIST", payload: wishlist });
      toast.success("Added To WishList!");
    } else {
      throw error;
    }
  } catch (error) {
    console.error("Error");
  }
}
export async function removeFromWishList(
  id,
  dispatch,
  token,
  toast,
  toastSetWhishListBtn
) {
  try {
    console.log(id);
    const response = await fetch(`/api/user/wishlist/${id}`, {
      method: "DELETE",
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      const { wishlist } = await response.json();
      console.log(wishlist);
      dispatch({ type: "REMOVE_WHISLIST", payload: wishlist });
      toast.error("Removed From WishList!");
    } else throw error;
  } catch (error) {
    console.error(error);
  }
}
