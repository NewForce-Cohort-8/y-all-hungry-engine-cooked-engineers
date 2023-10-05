import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js";
import { Cart } from "./Cart.js";
import {
	setLocation,
	resetTransientState,
	resetCart,
	getTransientState,
} from "./dataAccess.js";

export const WellHawtDawgs = () => {
	return `

  <nav class="navbar">
  <div class="container">
  <a class="navbar-brand" href="#">
  <img src="../images/hotdoglogo.png" href="./index.html" alt="" width="30" height="24">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link active" href="./founders.html">Founders</a>
      </div>
    </div>
  </div>
</nav>

    <div class="container p-5 text-center" id="locationcard2">
    <div class="card" id="hotdawgcard">
  <img src="../images/hotdawg_final.jpg" class="card-img-top" alt="..." id="hotdawgpic">
  <div class="card-body">
    <h5 class="card-title"> Step 1:</h5>
    <p class="card-text"> Start your order by selecting a location: ${Locations()} </p>
  </div>
</div>
  </div>

  <div class="row" id="cartandorder">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card" id="hotdawgcard">
      <div class="card-body">
        <h5 class="card-title">Create Your Order</h5>
        <p class="card-text"><h3>Step 2: Pick your food</h3>
        ${FoodDropDowns()}
        <h3> Step 3: Pick your drink </h3>
        ${Drinks()}
        <h3> Step 4: Pick your dessert </h3>
        ${IceCreams()}
        <h3> Step 5: Pick your toy </h3>
        ${ToysDropDowns()}
        <h3> Confirm your order: </h3>
        ${Cart()} 
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" id="hotdawgcard">
      <div class="card-body">
        <h5 class="card-title">In Your Cart:</h5>
        <p class="card-text">
        <a href="#" class="btn btn-danger">Order Button???</a>
      </div>
    </div>
  </div>
</div>

`

};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
		resetTransientState();
		setLocation(parseInt(e.target.value));
		resetCart();
	}
});
