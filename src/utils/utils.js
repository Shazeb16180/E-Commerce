import confetti from "canvas-confetti";

export const searchProduct = (products, stateSearch) => {
  return products.filter(({ name }) =>
    name.toLowerCase().includes(stateSearch.toLowerCase())
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

export const popper = () => {
  var duration = 3 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
};
