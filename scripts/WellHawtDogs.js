import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js"
import { setLocation, resetTransientState } from "./dataAccess.js";

// ${Locations()}
// ${FoodDropDowns()}
// ${IceCreams()}
// ${Drinks()}
// ${ToysDropDowns()}

export const WellHawtDawgs = () => {
	return `
    <div class="container p-5 bg-warning text-center">
    <div class="row" id="locationrow">
      <div class="col" id="picklocation">
      <h1> Well, Hot Dawgs! </h1>
      ${Locations()}
      </div>
    </div>
  </div>

  <div class="container mt-5 text-center">
  <div class="row g-2" id="pickandcart">

    <div class="col bg-primary" id="pickfood">
    <h3>Step 1: Pick your food</h3>
    ${FoodDropDowns()}
    <h3> Step 2: Pick your drink </h3>
    ${Drinks()}
    <h3> Step 3: Pick your dessert </h3>
    ${IceCreams()}
    <h3> Step 4: Pick your toy </h3>
    ${ToysDropDowns()}
    </div>

    <div class="col bg-success" id="loadcart">
    
    
    Cart Info and Order Button Go Here

  </div>

</div>


`
    
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
        resetTransientState();
		setLocation(parseInt(e.target.value));
	}
   
});
