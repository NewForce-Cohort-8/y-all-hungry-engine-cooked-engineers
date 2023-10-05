import { getLocations, setLocation } from "./dataAccess.js";

const locations = getLocations();

export const Locations = () => {
	return `<section id="location--section">
    <select class="btn btn-secondary dropdown-toggle" type="button" id="locations">
            <option value="0" class="option dropdown">Locations</option>
            ${locations
							.map((location) => {
								return `<option value="${location.id}" class="option dropdown">${location.name}</option>`;
							})
							.join("")}
        </select>
    </section>`;
};
