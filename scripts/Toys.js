import { getLocationToys, setToys, getToys, getTransientState } from "./dataAccess.js";
import { database } from "./database.js";

const allToys = getToys();
const toysForLocations = getLocationToys();

const displayToys = () => {
	return toys
		.map((toy) => {
			return `<option value="${toy.id} id="location--${toy.id}" class="option dropdown">${toy.name}</option>`;
		})
		.join("");
};

export const ToysDropDowns = () => {
	return `<section id="toy--section">
        <label for="toys">Select a toy for your order</label>
        <select name="toys" id="toys" class="options dropdown">
            <option value="0" class="option dropdown">Toys</option>
            ${toysForLocations
				.map((thisToy) => {
					const state = getTransientState();
					const matchedToys = allToys.find(
						(thatToy) => thatToy.id === thisToy.toyId
					);
					if (state.selectedLocation) {
						if (
							state.selectedLocation === thisToy.locationId &&
							thisToy.quantity > 0 &&
							matchedToys.name.toLowerCase() !== "none"
						) {
							return `<option value="${thisToy.id}" class="option dropdown">${matchedToys.name} (${database.locationToys[thisToy.id - 1].quantity})</option>`;
						}
						if (
							matchedToys.name.toLowerCase() === "none" &&
							state.selectedLocation === thisToy.locationId
						) {
							return `<option value="${thisToy.id}" class="option dropdown">${matchedToys.name}</option>`;
						}
					}
				})
				.join("")}
        </select>
    </section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("toys")) {
		if (e.target.value > 0) {
			setToys(parseInt(e.target.value));
		}
	}
});
