import { database } from "./database.js";
import { getTransientState, makeId } from "./dataAccess.js";

const state = getTransientState();

export const placeOrder = () => {
    let html = ``

    if (database.transientState.selectedFood && database.transientState.selectedDrink && database.transientState.selectedIceCream && database.transientState.selectedToy) {
        html += `<button id="order-btn">Place Order</button>
        <div id="order-summary"></div>`
        }
    return html
}