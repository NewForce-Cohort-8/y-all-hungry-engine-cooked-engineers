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
	return database.locationFood.map((f) => ({ ...f }));
};




export const getLocationIceCream = () => {
	return database.locationIceCream.map((f) => ({ ...f }));
};

export const getLocationDrink = () => {
	return database.locationDrinks.map((f) => ({...f}));
};


//set and get drink items
export const setDrink = (drinkId) => {
	database.transientState.selectedDrink = drinkId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getDrinks = () => {
	return database.drinks.map((f) => ({ ...f }));
};

export const getToys = () => {
    return database.toys.map(f => ({...f}))
};

export const setToys = (toyId) => {
	database.transientState.selectedToy= toyId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
	
};
export const getLocationToys = () => {
	return database.locationToys.map((f) => ({ ...f }));
};

export const makeId = (arr) => {
	if (arr.length === 0) {
		return 1;
	} else if (arr.length > 0) {
		return arr[arr.length - 1].id + 1;
	}
};

//make menu for each Location
const makeMenuesForLocations = () => {
	//generate random number function
	const makeQuantity = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};
	//get info from database
	const locations = getLocations();
	const food = getFood();
	const toys = getToys()
	const icecreams = getIceCream();
	const drinks = getDrinks();
  

	//iterate through locations in database
	for (const location of locations) {
		//iterate through food in database
		for (const foodItem of food) {
			//get destination array
			const foodForLocations = getLocationFood();
			//declare empty food item object
			let foodItemForThisLocation = {};
			//set item id
			foodItemForThisLocation.id = makeId(foodForLocations);
			//set locationId
			foodItemForThisLocation.locationId = location.id;
			//set foodId
			foodItemForThisLocation.foodId = foodItem.id;
			//set quantity to random number between 0 - 30
			foodItemForThisLocation.quantity = makeQuantity(0, 30);
			//push object to the the bridge table array
			database.locationFood.push(foodItemForThisLocation);
		}

		for (const toy of toys) {
			const toyForLocations = getLocationToys();
			let toyItemForThisLocation = {};
			toyItemForThisLocation.id = makeId(toyForLocations);
			toyItemForThisLocation.locationId =location.id;
			toyItemForThisLocation.toyId = toy.id;
			toyItemForThisLocation.quantity = makeQuantity(0, 45);
			database.locationToys.push(toyItemForThisLocation);
		}

		for (const icecream of icecreams) {
			const icecreamForLocations = getLocationIceCream();
			let icecreamItemForThisLocation = {};
			icecreamItemForThisLocation.id = makeId(icecreamForLocations);
			icecreamItemForThisLocation.locationId = location.id
			icecreamItemForThisLocation.icecreamId = icecream.id
			icecreamItemForThisLocation.quantity = makeQuantity(0, 50);
			database.locationIceCream.push(icecreamItemForThisLocation);
		}	

		for (const drink of drinks) {
			const drinkForLocations = getLocationDrink();
			let drinkItemForThisLocation = {};
			drinkItemForThisLocation.id = makeId(drinkForLocations);
			drinkItemForThisLocation.locationId = location.id;
			drinkItemForThisLocation.drinkId = drink.id;
			drinkItemForThisLocation.quantity = makeQuantity(0, 55);
			database.locationDrinks.push(drinkItemForThisLocation);
		}
	}
};

makeMenuesForLocations();
//get transient state
export const getTransientState = () => {
	return { ...database.transientState };
};

export const resetTransientState = () => {
	database.transientState = {};
};

const foods = getLocationFood();
const drinks = getLocationDrink();
const iceCreams = getIceCream();
const toys = getToys();

export const completeOrder = () => {
	// Broadcast custom event to entire documement so that the
	// application can re-render and update state
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
    for (const drink of drinks) {
        if (drink.locationId === customOrder.selectedLocation && drink.id === customOrder.selectedDrink) {
            database.locationDrinks[drink.id - 1].quantity -= 1;
            customOrder.price += database.drinks[drink.drinkId - 1].price;
       
    }
}
    for (const toy of toys) {
        if (toy.locationId === customOrder.selectedLocation && toy.id === customOrder.selectedToy) {
            database.locationToys[toy.id - 1].quantity -= 1;
            customOrder.price += database.toys[toy.toyId - 1].price;
        
    }
    }
    for (const food of foods) {
        if (food.locationId === customOrder.selectedLocation && food.id === customOrder.selectedFood) {
            database.locationFood[food.id - 1].quantity -= 1;
            customOrder.price += database.food[food.foodId - 1].price;
        }
    }
    for (const iceCream of iceCreams) {
        if (iceCream.locationId === customOrder.selectedLocation && iceCream.id === customOrder.selectedIceCream) {
            database.locationIceCream[iceCream.id - 1].quantity -= 1;
            customOrder.price += database.iceCream[iceCream.icecreamId - 1].price;
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
};
