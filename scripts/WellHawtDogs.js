import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js";
import { Cart } from "./Cart.js";
import {
	setLocation,
	resetTransientState,
	resetCart,
	getTransientState,
} from "./dataAccess.js";
import { ImageCards } from "./itemCards.js";

export const WellHawtDawgs = () => {
	return `
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

    <h2>Cart</h2>
    ${Cart()}
    <div id="cartDiv">
    ${ImageCards()}
    </div>
`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
		resetTransientState();
		setLocation(parseInt(e.target.value));
		resetCart();
	}
});
