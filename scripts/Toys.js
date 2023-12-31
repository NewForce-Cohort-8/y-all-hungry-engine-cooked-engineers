import {
	getLocationToys,
	setToys,
	getToys,
	getTransientState,
	cartSum,
} from "./dataAccess.js";

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
	<select class="btn btn-danger dropdown-toggle" type="button" id="toys">
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
										cartSum(thisToy) > 0 &&
										matchedToys.name.toLowerCase() !== "none"
									) {
										return `<option value="${
											thisToy.id
										}" class="option dropdown">${matchedToys.name} (${cartSum(
											thisToy
										)})</option>`;
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
