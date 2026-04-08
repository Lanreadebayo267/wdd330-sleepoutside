import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // Step 1a: get cart safely
  const cartItems = getLocalStorage("so-cart") || []; // default to empty array if null

  // Step 1b: handle empty cart
  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML =
      '<p class="empty-cart-message">Your cart is empty.</p>';
    return; // stop further execution
  }

  // Step 1c: render items if cart is not empty
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
