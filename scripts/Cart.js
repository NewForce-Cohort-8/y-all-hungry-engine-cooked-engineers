import { addToCart, getTransientState } from "./dataAccess.js";
import { CartSummary } from "./CartSummary.js";

//creates a cart button
export const AddToCartButton = () => {
	const state = getTransientState();
	if (
		state.selectedLocation &&
		state.selectedFood &&
		state.selectedDrink &&
		state.selectedIceCream &&
		state.selectedToy
	) {
		return `<button id="add-to-cart">Add To Cart</button>`;
	} else {
		return "";
	}
};

//adds an event listener to use add to cart function on button click
document.addEventListener("click", (e) => {
	if (e.target.id.startsWith("add-to-cart")) {
		addToCart();
	}
});
