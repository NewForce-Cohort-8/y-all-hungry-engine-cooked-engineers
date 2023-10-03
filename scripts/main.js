import { WellHawtDawgs } from "./WellHawtDogs.js";
import { getTransientState } from "./dataAccess.js";

const main = document.querySelector("#container");

const renderAllHTML = () => {
	main.innerHTML = WellHawtDawgs();

	const locationsDropdown = document.querySelector("#locations");
	let currentState = getTransientState();
	if (currentState.selectedLocation >= 1) {
		locationsDropdown.value = currentState.selectedLocation;
	}

	const iceCreamDropdown = document.querySelector("#iceCream");
	if (currentState.selectedIceCream >= 1) {
		iceCreamDropdown.value = currentState.selectedIceCream;
	}

	const drinksDropdown = document.querySelector("#drinks");
	if (currentState.selectedDrink >= 1) {
		drinksDropdown.value = currentState.selectedDrink;
	}

	const toysDropdown = document.querySelector("#toys");
	if (currentState.selectedToy >= 1) {
		toysDropdown.value = currentState.selectedToy;
	}
};

renderAllHTML();

document.addEventListener("stateChanged", (e) => {
	renderAllHTML();
});
