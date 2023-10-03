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
};

renderAllHTML();

document.addEventListener("stateChanged", (e) => {
	renderAllHTML();
});
