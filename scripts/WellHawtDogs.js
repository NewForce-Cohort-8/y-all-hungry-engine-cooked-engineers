import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js";
import { AddToCartButton } from "./Cart.js";
import { PlaceOrderButton } from "./Orders.js";
import { CartSummary } from "./CartSummary.js";
import { OrderSummary } from "./OrderSummary.js";
import {
	setLocation,
	resetTransientState,
	resetCart,
	getCart,
	getOrders,
} from "./dataAccess.js";
import { ImageCards } from "./itemCards.js";

export const WellHawtDawgs = () => {
	const cart = getCart();
	const orders = getOrders();
	let html = `
    <h1>Well HOT Dawgs!</h1>
    ${Locations()}

    <h2>Food Options</h2>
    ${FoodDropDowns()}
    
    <h2>Ice Cream Options</h2>
    ${IceCreams()} 
    
    <h2>Drink Options</h2>
    ${Drinks()}
    
    <h2>Toy Options</h2>
    ${ToysDropDowns()}
    ${AddToCartButton()}

    <div></div>
    ${ImageCards()}`;

	if (cart.length > 0) {
		html += `<h2>Cart</h2>
    ${CartSummary()} ${PlaceOrderButton()}`;
	}

	if (orders.length > 0) {
		html += `<h2>Order History</h2>
    ${OrderSummary()}`;
	}

	return html;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
		resetCart();
		resetTransientState();
		setLocation(parseInt(e.target.value));
	}
});
