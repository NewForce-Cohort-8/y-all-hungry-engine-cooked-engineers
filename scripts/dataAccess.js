import { database } from "./database.js";

//get cart
export const getCart = () => {
	return database.cart.map((cartItem) => ({ ...cartItem }));
};

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

//set and get drink items
export const setDrink = (drinkId) => {
	database.transientState.selectedDrink = drinkId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const getDrinks = () => {
	return database.drinks.map((f) => ({ ...f }));
};

//get and set toys
export const getToys = () => {
	return database.toys.map((f) => ({ ...f }));
};

export const setToys = (toyId) => {
	database.transientState.selectedToy = toyId;
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

// get specific location food
export const getLocationFood = () => {
	return database.locationFood.map((f) => ({ ...f }));
};

//get specific location ice cream
export const getLocationIceCream = () => {
	return database.locationIceCream.map((f) => ({ ...f }));
};

//get specific location drinks
export const getLocationDrink = () => {
	return database.locationDrinks.map((f) => ({ ...f }));
};

//get specific location toys
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
	const toys = getToys();
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
		//iterate through and create location toys objects
		for (const toy of toys) {
			const toyForLocations = getLocationToys();
			let toyItemForThisLocation = {};
			toyItemForThisLocation.id = makeId(toyForLocations);
			toyItemForThisLocation.locationId = location.id;
			toyItemForThisLocation.toyId = toy.id;
			toyItemForThisLocation.quantity = makeQuantity(0, 45);
			database.locationToys.push(toyItemForThisLocation);
		}

		//iterate through and create location ice cream objects
		for (const icecream of icecreams) {
			const icecreamForLocations = getLocationIceCream();
			let icecreamItemForThisLocation = {};
			icecreamItemForThisLocation.id = makeId(icecreamForLocations);
			icecreamItemForThisLocation.locationId = location.id;
			icecreamItemForThisLocation.icecreamId = icecream.id;
			icecreamItemForThisLocation.quantity = makeQuantity(0, 50);
			database.locationIceCream.push(icecreamItemForThisLocation);
		}

		//iterate through and create location drink object
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
//dynamically creates all location menues

makeMenuesForLocations();

//get transient state
export const getTransientState = () => {
	return { ...database.transientState };
};

//add to cart
export const addToCart = () => {
	//get state
	const state = getTransientState();
	//get state location
	const locationId = state.selectedLocation;
	//create requirements
	if (
		Object.hasOwn(state, "selectedFood") &&
		Object.hasOwn(state, "selectedDrink") &&
		Object.hasOwn(state, "selectedIceCream") &&
		Object.hasOwn(state, "selectedToy")
	) {
		//if all requirements are presetn push order to cart
		database.cart.push(state);
		//reset the state to blank
		resetTransientState();
		//set state location id to previous state location id
		setLocation(locationId);
		//get cart for testing
		const cart = getCart();
		//console.log cart for testing
		console.log(cart);
		//dispatch state change event
		document.dispatchEvent(new CustomEvent("stateChanged"));
	} else {
		//if requirments are not met alert the user
		window.alert("Please make a selection for all available options");
	}
};

//reset the cart back to an empty array
export const resetCart = () => {
	database.cart = [];
};
//set quantity for an object based on matched in the cart
export const cartSum = (obj) => {
	//get the cart
	const cart = getCart();
	//check to see if object has a food id
	if (Object.hasOwn(obj, "foodId")) {
		//if it does, filter the cart to find matches to that object
		let foodCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedFood === obj.foodId &&
				cartItem.selectedLocation === obj.locationId
			) {
				//if it is a match return true
				return true;
			} else {
				//if not a match return false
				return false;
			}
			//get the length of the new filtered array with only true matches
		}).length;
		//return object quantity minus the length of the filtered array
		return obj.quantity - foodCount;
	}
	//rinse repeat for each type of id
	if (Object.hasOwn(obj, "drinkId")) {
		let drinkCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedDrink === obj.drinkId &&
				cartItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		return obj.quantity - drinkCount;
	}
	if (Object.hasOwn(obj, "icecreamId")) {
		let iceCreamCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedIceCream === obj.icecreamId &&
				cartItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		return obj.quantity - iceCreamCount;
	}
	if (Object.hasOwn(obj, "toyId")) {
		let toyCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedToy === obj.toyId &&
				cartItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		return obj.quantity - toyCount;
	}
};

//reset transient state
export const resetTransientState = () => {
	database.transientState = {};
};

export const completeOrder = () => {
	const foods = getLocationFood();
	const drinks = getLocationDrink();
	const iceCreams = getLocationIceCream();
	const toys = getLocationToys();
	const state = getTransientState();
	let customOrder = state;
	customOrder.id = makeId(database.customOrders);
	customOrder.orderId = makeId(database.orders);
	customOrder.price = 0;
	let order = {};
	order.id = makeId(database.orders);
	order.orderId = customOrder.orderId;
	order.name = `Order #${order.orderId}`;
	order.timestamp = Date.now();
	database.orders.push(order);
	let html = ``;
	for (const food of foods) {
		if (
			food.locationId === customOrder.selectedLocation &&
			food.id === customOrder.selectedFood
		) {
			database.locationFood[food.id - 1].quantity -= 1;
			customOrder.price += database.food[food.foodId - 1].price;
			customOrder.selectedFoodName = database.food[food.foodId - 1].name;
			html += `You ordered ${customOrder.selectedFoodName} hot dog, `;
		}
	}
	for (const drink of drinks) {
		if (
			drink.locationId === customOrder.selectedLocation &&
			drink.id === customOrder.selectedDrink
		) {
			database.locationDrinks[drink.id - 1].quantity -= 1;
			customOrder.price += database.drinks[drink.drinkId - 1].price;
			customOrder.selectedDrinkName = database.drinks[drink.drinkId - 1].name;
			html += `a ${customOrder.selectedDrinkName}, `;
		}
	}
	for (const iceCream of iceCreams) {
		if (
			iceCream.locationId === customOrder.selectedLocation &&
			iceCream.id === customOrder.selectedIceCream
		) {
			database.locationIceCream[iceCream.id - 1].quantity -= 1;
			customOrder.price += database.iceCream[iceCream.icecreamId - 1].price;
			customOrder.selectedIceCreamName =
				database.iceCream[iceCream.icecreamId - 1].name;
			html += `${customOrder.selectedIceCreamName} ice cream, `;
		}
	}
	for (const toy of toys) {
		if (
			toy.locationId === customOrder.selectedLocation &&
			toy.id === customOrder.selectedToy
		) {
			database.locationToys[toy.id - 1].quantity -= 1;
			customOrder.price += database.toys[toy.toyId - 1].price;
			customOrder.selectedToyName = database.toys[toy.toyId - 1].name;
			html += `and ${customOrder.selectedToyName} `;
		}
	}
	customOrder.salesTax = customOrder.price * 0.06;
	customOrder.price += customOrder.salesTax;
	database.customOrders.push(customOrder);
	html += `for a total price of <strong>$${customOrder.price.toFixed(
		2
	)}</strong>. 
	<br>
	<br>
	Your order is <strong>Order #${
		customOrder.orderId
	}</strong>. It'll be ready in 10-15 minutes. Thank you!`;
	console.log(
		database.customOrders,
		database.orders,
		database.locationFood,
		database.locationIceCream,
		database.locationDrinks,
		database.locationToys
	);
	resetTransientState();
	// Broadcast custom event to entire documement so that the
	// application can re-render and update state
	document.dispatchEvent(new CustomEvent("stateChanged"));
	return html;
};
