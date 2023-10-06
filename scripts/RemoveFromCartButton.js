import { removeItem } from "./dataAccess.js";

export const RemoveItemFromCartButton = (num) => {
	return `<button type="button" class="remove-button" id="remove--${num}">X</button>`;
};

document.addEventListener("click", (e) => {
	removeItem(e.target.id);
});
