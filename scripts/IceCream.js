import { getIceCream, setIceCream } from "./dataAccess.js";

const IceCream = getIceCream();

const displayIceCream = () => {
	return IceCream.map((iceCream) => {
			return `<option value="${iceCream.id} id="location--${iceCream.id}" class="option dropdown">${iceCream.name}</option>`;
		})
		.join("");
};

export const IceCreams = () => {
	return `<section id="iceCream--section">
        <label for="iceCream">Select an ice cream for your order</label>
        <select name="iceCream" id="iceCream" class="options dropdown">
            <option value="0" class="option dropdown">Ice Cream</option>
            ${IceCream
                .map((iceCream) => {
								return `<option value="${iceCream.id}" class="option dropdown">${iceCream.name}</option>`;
							})
							.join("")}
        </select>
    </section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("iceCream")) {
		if (e.target.value > 0) {
			setIceCream(parseInt(e.target.value));
		}
	}
});
