import { addToCart, getCart } from "./dataAccess.js";

//creates a cart button
export const Cart = () => {
	return `<button id="add-to-cart">Add To Cart</button>`;
};

//adds an event listener to use add to cart function on button click
document.addEventListener("click", (e) => {
	if (e.target.id.startsWith("add-to-cart")) {
		addToCart();
	}
});
