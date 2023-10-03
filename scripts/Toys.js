import { getToys, setToys } from "./dataAccess.js";

const toys = getToys();

const displayToys = () => {
	return toys
		.map((toy) => {
			return `<option value="${toy.id} id="location--${toy.id}" class="option dropdown">${toy.name}</option>`;
		})
		.join("");
};

export const Toys = () => {
	return `<section id="toy--section">
        <label for="toys">Select a toy for your order</label>
        <select name="toys" id="toys" class="options dropdown">
            <option value="0" class="option dropdown">Toys</option>
            ${toys
							.map((toy) => {
								return `<option value="${toy.id}" class="option dropdown">${toy.name}</option>`;
							})
							.join("")}
        </select>
    </section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
		if (e.target.value > 0) {
			setToys(parseInt(e.target.value));
		}
	}
});
