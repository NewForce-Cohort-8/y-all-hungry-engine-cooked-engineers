import { database } from "./database.js";

//set and get location
export const setLocation = (locationId) => {
	database.transientState.selectedLocation = locationId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getLocations = () => {
	return database.locations.map((f) => ({ ...f }));
};

//set and get food items
export const getFood = () => {
	return database.food.map((food) => ({ ...food }));
};
export const setFood = (foodId) => {
	database.transientState.selectedFood = foodId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};
//get and set food for each Location
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
