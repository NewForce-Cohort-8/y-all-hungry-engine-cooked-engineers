import { getCart, completeOrder } from "./dataAccess.js";
import { OrderNameForm } from "./OrderName.js";

export const PlaceOrderButton = () => {
	const cart = getCart();

	if (cart.length > 0) {
		return `${OrderNameForm()}<button id="order-btn">Complete Order</button>`;
	} else {
		return "";
	}
};

document.addEventListener("click", (e) => {
	if (e.target.id.startsWith("order-btn")) {
		completeOrder();
	}
});
