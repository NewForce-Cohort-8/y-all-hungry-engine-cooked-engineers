import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js"
import {completeOrder, setLocation, getLocationDrink, getLocationFood, getLocationIceCream, getLocationToys, resetTransientState, getTransientState, makeId } from "./dataAccess.js";
import { placeOrder } from "./Orders.js";

const menuDrinks = getLocationDrink();
const menuToys = getLocationToys();
const menuFoods = getLocationFood();
const menuIceCreams = getLocationIceCream();


console.log(
    menuFoods,
    menuIceCreams,
    menuDrinks,
    menuToys
)

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
    
    <h2> Toy Options </h2>
    ${ToysDropDowns()}

    ${placeOrder()}

`
    
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
        resetTransientState();
		setLocation(parseInt(e.target.value));
	}
   
});

document.addEventListener("click", (e) => {
    if (e.target.id === "order-btn") {
    completeOrder();
    }
})