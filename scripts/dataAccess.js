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
export const getLocationFood = () => {
	return database.locationFood.map((food) => ({ ...food }));
};
//make menu for each Location

const makeMenuesForLocations = () => {
	//generate random number function
	const makeQuantity = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	//get info from database
	const locations = getLocations();
	const foodForLocations = getLocationFood();
	const food = getFood();
	//iterate through locations in database
	for (const location of locations) {
		//iterate through food in database
		for (const foodItem of food) {
			//declare empty food item object
			let foodItemForThisLocation = {};
			//check to see if food items for location has anything in it
			if ((foodForLocations.length = 0)) {
				//if not id = 1
				foodItemForThisLocation.id = 1;
			} else if (foodForLocations.length > 0) {
				//if so id = the id of the last index of the array + 1
				foodItemForThisLocation.id =
					foodForLocations[foodForLocations.length - 1].id + 1;
			}
			//set locationId
			foodItemForThisLocation.locationId = location.id;
			//set foodId
			foodItemForThisLocation.foodId = foodItem.id;
			//set quantity to random number between 0 - 30
			foodItemForThisLocation.quantity = makeQuantity(0, 30);
			//push object to the the bridge table array
			foodForLocations.push(foodItemForThisLocation);
		}
	}
};

makeMenuesForLocations();
//get food for each Location

//get transient state
export const setDrink = (drinkId) => {
	database.transientState.selectedDrink = drinkId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getDrinks = () => {
	return database.drinks.map((f) => ({ ...f }));
};

export const getTransientState = () => {
	return { ...database.transientState };
};

export const completeOrder = () => {
	// Broadcast custom event to entire documement so that the
	// application can re-render and update state
	document.dispatchEvent(new CustomEvent("stateChanged"));
};
