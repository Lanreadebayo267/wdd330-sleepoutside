import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");

function addProductToCart(product) {
  let cart = JSON.parse(localStorage.getItem("so-cart")) || [];

  const existingItem = cart.find(item => item.id === product.Id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.Id,
      name: product.Name,
      price: product.FinalPrice,
      quantity: 1
    });
  }

  setLocalStorage("so-cart", cart);
}

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
