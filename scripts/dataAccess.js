import { database } from "./database.js";
import { RemoveItemFromCartButton } from "./RemoveFromCartButton.js";

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

//get and set Customer Orders
export const getCustomOrders = () => {
	return database.customOrders.map((order) => ({ ...order }));
};

export const setCustomeOrders = (order) => {
	database.customOrders.push(order);
};

//get and set order
export const getOrders = () => {
	return database.orders.map((order) => ({ ...order }));
};

export const setOrders = (order) => {
	database.orders.push(order);
};

//make id based on destination array length
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
	const customOrders = getCustomOrders();
	//check to see if object has a food id
	if (Object.hasOwn(obj, "foodId")) {
		//if it does, filter the cart to find matches to that object
		let foodCartCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedFood === obj.id &&
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
		let foodOrdersCount = customOrders.filter((ordersItem) => {
			if (
				ordersItem.selectedFood === obj.id &&
				ordersItem.selectedLocation === obj.locationId
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
		return obj.quantity - foodCartCount - foodOrdersCount;
	}
	//rinse repeat for each type of id
	if (Object.hasOwn(obj, "drinkId")) {
		let drinkCartCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedDrink === obj.id &&
				cartItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		let drinkOrdersCount = customOrders.filter((ordersItem) => {
			if (
				ordersItem.selectedDrink === obj.id &&
				ordersItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		return obj.quantity - drinkCartCount - drinkOrdersCount;
	}
	if (Object.hasOwn(obj, "icecreamId")) {
		let iceCreamCartCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedIceCream === obj.id &&
				cartItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		let iceCreamOrdersCount = customOrders.filter((ordersItem) => {
			if (
				ordersItem.selectedIceCream === obj.id &&
				ordersItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		return obj.quantity - iceCreamCartCount - iceCreamOrdersCount;
	}
	if (Object.hasOwn(obj, "toyId")) {
		let toysCartCount = cart.filter((cartItem) => {
			if (
				cartItem.selectedToy === obj.id &&
				cartItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		let toysOrdersCount = customOrders.filter((ordersItem) => {
			if (
				ordersItem.selectedToy === obj.id &&
				ordersItem.selectedLocation === obj.locationId
			) {
				return true;
			} else {
				return false;
			}
		}).length;
		return obj.quantity - toysCartCount - toysOrdersCount;
	}
};

//reset transient state
export const resetTransientState = () => {
	database.transientState = {};
};

//match obj ids to location in database
export const findMatchedLocationInDatabase = (order) => {
	const allLocations = getLocations();
	let matchedLocation = allLocations.find(
		(location) => location.id === order.selectedLocation
	);
	return matchedLocation;
};
//match obj ids to food in database
export const findMatchedFoodInDatabase = (order) => {
	const allFood = getFood();
	const allStoreFood = getLocationFood();
	let matchedStoreFood = allStoreFood.find(
		(food) => order.selectedFood === food.id
	);
	let matchedFood = allFood.find((food) => food.id === matchedStoreFood.foodId);
	return matchedFood;
};
//match obj ids to drink in database
export const findMatchedDrinkInDatabase = (order) => {
	const allDrinks = getDrinks();
	const allStoreDrinks = getLocationDrink();
	let matchedStoreDrink = allStoreDrinks.find(
		(drink) => drink.id === order.selectedDrink
	);
	let matchedDrink = allDrinks.find(
		(drink) => drink.id === matchedStoreDrink.drinkId
	);
	return matchedDrink;
};

//match obj ids to ice cream in database
export const findMatchedIceCreamInDatabase = (order) => {
	const allIceCreams = getIceCream();
	const allStoreIceCreams = getLocationIceCream();
	let matchedStoreIceCream = allStoreIceCreams.find(
		(iceCream) => iceCream.id === order.selectedIceCream
	);
	let matchedIceCream = allIceCreams.find(
		(iceCream) => iceCream.id === matchedStoreIceCream.icecreamId
	);
	return matchedIceCream;
};

//match obj ids to toy in database
export const findMatchedToyInDatabase = (order) => {
	const allToys = getToys();
	const allStoreToys = getLocationToys();
	let matchedStoreToy = allStoreToys.find(
		(toy) => toy.id === order.selectedToy
	);
	let matchedToy = allToys.find((toy) => toy.id === matchedStoreToy.toyId);
	return matchedToy;
};

//function to calculate price
export const calculatePrice = (order) => {
	//match items from order argument to database
	let matchedFood = findMatchedFoodInDatabase(order);
	let matchedDrink = findMatchedDrinkInDatabase(order);
	let matchedIceCream = findMatchedIceCreamInDatabase(order);
	let matchedToy = findMatchedToyInDatabase(order);
	//return total price
	return (
		matchedFood.price +
		matchedDrink.price +
		matchedIceCream.price +
		matchedToy.price
	);
};
//function to calculate sales tax from a number passed through as the argument
export const calculateSalesTax = (num) => {
	return num * 0.06;
};
//create custome order
const makeCustomOrder = (obj, orderId) => {
	//gets current custom orders array
	const customerOrders = getCustomOrders();
	//sets custom order to argument object
	let customOrder = obj;
	//makes custom order primary key id
	customOrder.id = makeId(customerOrders);
	//makes orderId equal to order primary key
	customOrder.orderId = orderId;
	//calculates price and sets it to 2 decimal places
	customOrder.price = parseInt(calculatePrice(obj)).toFixed(2);
	//calculates sales tax
	customOrder.salesTax = calculateSalesTax(customOrder.price);
	//pushed custom orders to destination array
	setCustomeOrders(customOrder);
};
//function to complete order
export const completeOrder = () => {
	//get current cart
	const cart = getCart();
	//create empty order object
	let order = {};
	//use makeId function to create primary key id based of length of destination array
	order.id = makeId(database.orders);
	//create order timestamp
	order.timestamp = Date.now();
	//get input value from order name text field input
	const orderName = document.querySelector("#order-name").value;
	//set name property of order object to name entered in order name text field
	order.name = orderName;
	//check to see if there has been a name entered
	if (order.name) {
		//if so iterate through the cart items
		for (const cartItem of cart) {
			//make unique custom order entries per cart item of order
			makeCustomOrder({ ...cartItem }, order.id);
		}
		//pushes order to orders array
		setOrders(order);
		//resets the cart to a blank array
		resetCart();
		//resets the state to a blank object
		resetTransientState();
		//get orders array for testing
		const orders = getOrders();
		//console log orders array for testing
		const customerReceipt = orders.pop();

		console.log(orders);
		//console log cart array for testing
		console.log(cart);
		//get custom orders array for testing
		const customOrders = getCustomOrders();
		//console log custom orders array for testing
		console.log(customOrders);
	} else {
		//if name is not entered into input text field window alert to enter a name
		window.alert(`Please enter a name for the order.`);
	}

	// Broadcast custom event to entire documement so that the
	// application can re-render and update state
	document.dispatchEvent(new CustomEvent("stateChanged"));
};

export const makeSummary = (arr) => {
	let salesTax = 0;
	let subTotal = 0;
	let index = 0;
	let html = `<ul id="cart-list">`;
	let htmlArray = [];
	arr.map((item) => {
		index++;
		let thisItemFood = findMatchedFoodInDatabase(item);
		let thisItemDrink = findMatchedDrinkInDatabase(item);
		let thisItemIceCream = findMatchedIceCreamInDatabase(item);
		let thisItemToy = findMatchedToyInDatabase(item);
		let thisItemPrice = calculatePrice(item);
		salesTax += calculateSalesTax(thisItemPrice);
		subTotal += thisItemPrice;

		htmlArray.push(`<li class="cart-item">`);

		htmlArray.push(`<div class="cart-list-value"><h4>${index}</h4></div>`);

		let foodCartSummary = ``;
		if (thisItemFood.name.toLowerCase() !== "none") {
			foodCartSummary = `<div class="cart-list-value"><h4>THE DAWG:</h4> ${thisItemFood.name}</div>`;
			htmlArray.push(foodCartSummary);
		}
		let drinkCartSummary = ``;
		if (thisItemDrink.name.toLowerCase() !== "none") {
			drinkCartSummary = `<div class="cart-list-value"><h4>THE DRINK:</h4> ${thisItemDrink.name}</div>`;
			htmlArray.push(drinkCartSummary);
		}
		let iceCreamCartSummary = ``;
		if (thisItemIceCream.name.toLowerCase() !== "none") {
			iceCreamCartSummary = `<div class="cart-list-value"><h4>THE SCOOPS:</h4> ${thisItemIceCream.name}</div>`;
			htmlArray.push(iceCreamCartSummary);
		}
		let toyCartSummary = ``;
		if (thisItemToy.name.toLowerCase() !== "none") {
			toyCartSummary = `<div class="cart-list-value"><h4>THE TOY:</h4> ${thisItemToy.name}</div>`;
			htmlArray.push(toyCartSummary);
		}
		let cartSummaryPrice = ``;
		if (thisItemPrice !== 0) {
			cartSummaryPrice = `<div class="cart-list-value"><h4>THE PRICE:</h4> $${thisItemPrice.toFixed(
				2
			)}</div>`;
			htmlArray.push(cartSummaryPrice);
		}
		if (!item.orderId) {
			htmlArray.push(RemoveItemFromCartButton(index - 1));
		}
		htmlArray.push(`</li>`);
	});
	html += htmlArray.join("");
	html += `</ul>`;

	if (subTotal > 0) {
		html += `<h4>The Subtotal: ${subTotal.toFixed(2)}</h4>`;
	}
	if (salesTax > 0) {
		html += `<h4>The Sales Tax: ${salesTax.toFixed(2)}</h4>`;
	}
	let total = subTotal + salesTax;
	if (total > 0) {
		html += `<h4>The Total: ${(subTotal + salesTax).toFixed(2)}</h4>`;
	}
	return html;
};

export const removeItem = (id) => {
	if (id.startsWith("remove")) {
		const [, itemIndex] = id.split("--");
		database.cart.splice(itemIndex, 1);
		document.dispatchEvent(new CustomEvent("stateChanged"));
	}
};
