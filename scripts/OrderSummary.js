import {
	getOrders,
	getCustomOrders,
	makeSummary,
	findMatchedLocationInDatabase,
} from "./dataAccess.js";

export const OrderSummary = () => {
	const orders = getOrders();
	if (orders.length > 0) {
		return orders
			.map((order) => {
				const customOrders = getCustomOrders();
				let matchedCustomOrder = customOrders.find(
					(customOrder) => customOrder.orderId === order.id
				);
				let matchedLocation = findMatchedLocationInDatabase(matchedCustomOrder);

				let orderDate = new Date(order.timestamp);
				let orderTime = orderDate.toLocaleTimeString("en-US");
				return `<div class="order" id="order--${order.id}"><h4>ORDER ${
					order.id
				}: ${order.name} placed an order at ${orderTime} from the ${
					matchedLocation.name
				} Truck:</h4><div class="custom-orders">${makeSummary(
					customOrders.filter((customOrder) => customOrder.orderId === order.id)
				)}</div></div>`;
			})
			.join("");
	} else {
		return "";
	}
};
