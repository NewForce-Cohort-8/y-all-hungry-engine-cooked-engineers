import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js"
import {setLocation, getLocationDrink, getLocationFood, getLocationIceCream, getLocationToys, resetTransientState, getTransientState, makeId } from "./dataAccess.js";
import { placeOrder } from "./Orders.js";
import { database } from "./database.js";

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
    const state = getTransientState();
    let customOrder = state;
    customOrder.id = makeId(database.customOrders);
    customOrder.orderId = makeId(database.orders);
    customOrder.price = 0;
    let order = {};
    order.id = makeId(database.orders)
    order.orderId = customOrder.orderId
    order.name = `Order #${order.orderId}`
    order.timestamp = Date.now();
    database.orders.push(order);
    console.log(database.customOrders);
    for (const menuDrink of menuDrinks) {
        if (menuDrink.locationId === customOrder.selectedLocation && menuDrink.id === customOrder.selectedDrink) {
            database.locationDrinks[menuDrink.id - 1].quantity -= 1;
            customOrder.price += database.drinks[menuDrink.drinkId - 1].price;
       
    }
}
    for (const menuToy of menuToys) {
        if (menuToy.locationId === customOrder.selectedLocation && menuToy.id === customOrder.selectedToy) {
            database.locationToys[menuToy.id - 1].quantity -= 1;
            customOrder.price += database.toys[menuToy.toyId - 1].price;
        
    }
    }
    for (const menuFood of menuFoods) {
        if (menuFood.locationId === customOrder.selectedLocation && menuFood.id === customOrder.selectedFood) {
            database.locationFood[menuFood.id - 1].quantity -= 1;
            customOrder.price += database.food[menuFood.foodId - 1].price;
        }
    }
    for (const menuIceCream of menuIceCreams) {
        if (menuIceCream.locationId === customOrder.selectedLocation && menuIceCream.id === customOrder.selectedIceCream) {
            database.locationIceCream[menuIceCream.id - 1].quantity -= 1;
            customOrder.price += database.iceCream[menuIceCream.icecreamId - 1].price;
        }
    }
    database.customOrders.push(customOrder);
    console.log(
        database.locationFood,
        database.locationIceCream,
        database.locationDrinks,
        database.locationToys);
    resetTransientState();
    document.dispatchEvent(new CustomEvent("stateChanged"));
    }
})