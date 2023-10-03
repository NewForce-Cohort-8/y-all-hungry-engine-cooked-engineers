import { getDrinks, setDrink } from "./dataAccess.js";

const drinks = getDrinks();

export const Drinks = () => {
	return `<section id="drink--section">
        <label for="drinks">Select a drink</label>
        <select name="drinks" id="drinks" class="options dropdown">
            <option value="0" class="option dropdown">Drinks</option>
            ${drinks
							.map((drink) => {
								return `<option value="${drink.id}" class="option dropdown">${drink.name}</option>`;
							})
							.join("")}
        </select>
    </section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("drink")) {
		if (e.target.value > 0) {
			setDrink(parseInt(e.target.value));
		}
	}
});