import { getCart, makeSummary } from "./dataAccess.js";

export const CartSummary = () => {
	const cart = getCart();
	return makeSummary(cart);
};
