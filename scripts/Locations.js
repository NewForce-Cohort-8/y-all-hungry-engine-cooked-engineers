import { getLocations, setLocation } from "./dataAccess.js";

const locations = getLocations();

export const Locations = () => {
	return `<section id="location--section">
        <label for="locations">Select a location for your order</label>
        <select name="locations" id="locations" class="options dropdown">
            <option value="0" class="option dropdown">Locations</option>
            ${locations
							.map((location) => {
								return `<option value="${location.id}" class="option dropdown">${location.name}</option>`;
							})
							.join("")}
        </select>
    </section>`;
};
