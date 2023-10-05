import {
	getLocationFood,
	getFood,
	setFood,
	getTransientState,
} from "./dataAccess.js";
const foodForLocations = getLocationFood();
const allFood = getFood();

export const FoodDropDowns = () => {
	//get info from database

	return `<section id="food--section">
	<select class="btn btn-danger dropdown-toggle" type="button" id="food">
        <option value="0" class="option dropdown">Food Items</option>
        ${foodForLocations
					.map((thisFood) => {
						const state = getTransientState();
						const matchedFood = allFood.find(
							(thatFood) => thatFood.id === thisFood.foodId
						);
						if (state.selectedLocation) {
							if (
								state.selectedLocation === thisFood.locationId &&
								thisFood.quantity > 0 &&
								matchedFood.name.toLowerCase() !== "none"
							) {
								return `<option value="${thisFood.id}" class="option dropdown">${matchedFood.name} (${thisFood.quantity})</option>`;
							}
							if (
								matchedFood.name.toLowerCase() === "none" &&
								state.selectedLocation === thisFood.locationId
							) {
								return `<option value="${thisFood.id}" class="option dropdown">${matchedFood.name}</option>`;
							}
						}
					})
					.join("")}
                
    </select>
</section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("food")) {
		setFood(parseInt(e.target.value));
	}
});
