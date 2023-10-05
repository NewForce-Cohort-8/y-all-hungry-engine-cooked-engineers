import { getLocationDrink, setDrink, getDrinks, getTransientState } from "./dataAccess.js";

const drinks = getDrinks();
const drinksForLocations = getLocationDrink();

export const Drinks = () => {
	return `<section id="drink--section">
        <select class="btn btn-danger dropdown-toggle" type="button">
            <option value="0" class="option dropdown">Drinks</option>
            ${drinksForLocations
                .map((thisDrink) => {
                    const state = getTransientState();
                    const matchedDrink = drinks.find(
                        (thatDrink) => thatDrink.id === thisDrink.drinkId
                    );
                    if (state.selectedLocation) {
                        if (
                            state.selectedLocation === thisDrink.locationId &&
                            thisDrink.quantity > 0 &&
                            matchedDrink.name.toLowerCase() !== "none"
                        ) {
                            return `<option value="${thisDrink.id}" class="option dropdown">${matchedDrink.name} (${thisDrink.quantity})</option>`;
                        }
                        if (
                            matchedDrink.name.toLowerCase() === "none" &&
                            state.selectedLocation === thisDrink.locationId
                        ) {
                            return `<option value="${thisDrink.id}" class="option dropdown">${matchedDrink.name}</option>`;
                        }
                    }
                })
                .join("")}
        </select>
    </section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("drink")) {
			setDrink(parseInt(e.target.value));
		}
	}
);