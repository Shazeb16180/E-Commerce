export const isProductInWishlist = (wishlist, id) =>
  wishlist?.find((wishlistProduct) => wishlistProduct.id === id);

export const isProductInCart = (cart, id) =>
  cart?.find((cartProduct) => cartProduct.id === id);
