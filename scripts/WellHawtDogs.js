import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";

export const WellHawtDawgs = () => {
	return `
    <h1>Well HOT Dawgs!</h1>
    ${Locations()}
    
    <h2> Ice Cream Options </h2>
    ${IceCreams()}; `
    
};
