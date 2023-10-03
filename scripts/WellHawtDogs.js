import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { setLocation } from "./dataAccess.js";
import { Toys } from "./Toys.js"


export const WellHawtDawgs = () => {
	return `
    <h1>Well HOT Dawgs!</h1>
    ${Locations()}

    <h2>Food Options</h2>
    ${FoodDropDowns()}
    
    <h2>Ice Cream Options</h2>
    ${IceCreams()} 
    
    <h2>Drink Options</h2>
    ${Drinks()}
    
    <h2> Toy Options </h2>
    ${Toys()}
`
    

};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
		setLocation(parseInt(e.target.value));
		const foodDropdown = document.querySelector("#food");
        const drinksDropdown = document.querySelector("#drinks");
		foodDropdown.value = 0;
        drinksDropdown.value = 0;
	}
});
