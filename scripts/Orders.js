import { database } from "./database.js";

export const placeOrder = () => {
    let html = ``

    if (database.transientState.selectedFood && database.transientState.selectedDrink && database.transientState.selectedIceCream && database.transientState.selectedToy) {
        html += `<button id="order-btn">Complete Order</button>`
        }
    
    html += `<br>
    <div id="order-summary"></div>`
    return html
}