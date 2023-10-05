import { getIceCream, setIceCream, getLocationIceCream, getTransientState} from "./dataAccess.js";

const IceCream = getIceCream();
const icecreamForLocations = getLocationIceCream();

export const IceCreams = () => {
	return `<section id="iceCream--section">
  <select class="btn btn-danger dropdown-toggle" type="button" id="iceCream">
            <option value="0" class="option dropdown">Ice Cream</option>
            ${icecreamForLocations
              .map((thisIceCream) => {
                const state = getTransientState();
                const matchedIceCream = IceCream.find(
                  (thatIceCream) => thatIceCream.id === thisIceCream.icecreamId
                );
                if (state.selectedLocation) {
                  if (
                    state.selectedLocation === thisIceCream.locationId &&
                    thisIceCream.quantity > 0 &&
                    matchedIceCream.name.toLowerCase() !== "none"
                  ) {
                    return `<option value="${thisIceCream.id}" class="option dropdown">${matchedIceCream.name} (${thisIceCream.quantity})</option>`;
                  }
                  if (
                    matchedIceCream.name.toLowerCase() === "none" &&
                    state.selectedLocation === thisIceCream.locationId
                  ) {
                    return `<option value="${thisIceCream.id}" class="option dropdown">${matchedIceCream.name}</option>`;
                  }
                }
              })
              .join("")}
                    
        </select>
    </section>`;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("iceCream")) {
			setIceCream(parseInt(e.target.value));
		}
});
