import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { Toys } from "./Toys.js"

export const WellHawtDawgs = () => {
	return `
    <h1>Well HOT Dawgs!</h1>
    ${Locations()}
    
    <h2> Ice Cream Options </h2>
    ${IceCreams()}; 

    <h2> Drink Options </h2>
    ${Drinks()}
    
    <h2> Toy Options </h2>
    ${Toys()}
`
    
};
