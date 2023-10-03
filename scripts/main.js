import { WellHawtDawgs } from "./WellHawtDogs.js";
import { getTransientState } from "./dataAccess.js";

const main = document.querySelector("#container");
const renderAllHTML = () => {
	main.innerHTML = WellHawtDawgs();
	let currentState = getTransientState();

	const locationsDropdown = document.querySelector("#locations");
	if (currentState.selectedLocation >= 1) {
		locationsDropdown.value = currentState.selectedLocation;
	}
	const foodDropdown = document.querySelector("#food");
	if (currentState.selectedFood >= 1) {
		foodDropdown.value = currentState.selectedFood;
	} else if (!currentState.selectedFood) {
		foodDropdown.value = 0;
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
