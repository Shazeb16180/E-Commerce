export const searchProduct = (products, stateSearch) => {
  return products.filter(({ name }) =>
    name.toLowerCase().includes(stateSearch)
  );
};
export const rangeProducts = (products, statePriceRange) => {
  return products.filter(
    ({ price }) => Number(price) <= Number(statePriceRange)
  );
};
export const ratingProducts = (products, stateRating) => {
  return products.filter(
    ({ rating }) =>
      Number(rating) >= Number(stateRating === "false" ? 1 : stateRating)
  );
};
export const sortProducts = (sort, products) => {
  switch (sort) {
    case "L-H":
      return [...products].sort((a, b) => a.price - b.price);
    case "H-L":
      return [...products].sort((a, b) => b.price - a.price);
    case "None":
      return [...products];
    default:
      return [...products];
  }
};

export const filterCategories = (categories, products, stateCategory) => {
  const selectedCategories = categories
    .filter(({ categoryName }) => stateCategory[categoryName])
    .map(({ categoryName }) => categoryName);
  return selectedCategories.length > 0
    ? products.filter(({ categoryName }) =>
        selectedCategories.find((fc) => fc === categoryName) === undefined
          ? false
          : true
      )
    : products;
};
export const isProductInWishlist = (wishlist, id) =>
  wishlist?.find((wishlistProduct) => wishlistProduct.id === id);

export const isProductInCart = (cart, id) =>
  cart?.find((cartProduct) => cartProduct.id === id);
