import { database } from "./database.js";

//set and get location
export const setLocation = (locationId) => {
	database.transientState.selectedLocation = locationId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getLocations = () => {
	return database.locations.map((f) => ({ ...f }));
};
//set and get icecreams
export const setIceCream = (iceCreamId) => {
	database.transientState.selectedIceCream = iceCreamId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getIceCream = () => {
	return database.iceCream.map((f) => ({ ...f }));
};

//set and get food items
export const getFood = () => {
	return database.food.map((food) => ({ ...food }));
};
export const setFood = (foodId) => {
	database.transientState.selectedFood = foodId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

//make for for each Location
const makeMenuesForLocations = () => {
	const foodForLocations = getLocationFood();
	const locations = getLocations();
	const food = getFood();
	for (const location of locations) {
		for (const foodItem of food) {
			let foodItemForThisLocation = {};
			if ((foodForLocations.length = 0)) {
				foodItemForThisLocation.id = 1;
			} else {
				foodItemForThisLocation.id =
					foodForLocations[foodForLocations.length - 1].id + 1;
			}
		}
	}
};

//get food for each Location
export const getLocationFood = () => {
	return database.locationFood.map((food) => ({ ...food }));
};

//get transient state
export const getTransientState = () => {
	return { ...database.transientState };
};

export const completeOrder = () => {
	// Broadcast custom event to entire documement so that the
	// application can re-render and update state
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

//make random number function
const makeQuantity = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
