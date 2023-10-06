import { Locations } from "./Locations.js";
import { IceCreams } from "./IceCream.js";
import { Drinks } from "./Drinks.js";
import { FoodDropDowns } from "./Food.js";
import { ToysDropDowns } from "./Toys.js";
import { AddToCartButton } from "./Cart.js";
import { PlaceOrderButton } from "./Orders.js";
import { CartSummary } from "./CartSummary.js";
import { OrderSummary } from "./OrderSummary.js";
import {
	setLocation,
	resetTransientState,
	resetCart,
	getCart,
	getOrders,
} from "./dataAccess.js";
import { ImageCards } from "./itemCards.js";

export const WellHawtDawgs = () => {

	let html = `
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
        ${AddToCartButton()}
      </div>
    </div> 
  </div>
  <div class="col-sm-6 mb-3 mb-sm-0">
  <div class="card" id="hotdawgcard">
    <div class="card-body">
      <h5 class="card-title"> Your Selections: </h5>
    </div>
    ${ImageCards()}
  </div> 
</div> `
  
        const cart = getCart();
	      const orders = getOrders();
    if (cart.length > 0) {
      html += `   <div class="row" id="cartrow">
      <div class="card" id="hotdawgcard">
        <div class="card-body">
         <h2>Cart</h2> 
      ${CartSummary()} ${PlaceOrderButton()} 
       </div>
      </div>
    </div>`;
    }
  
    if (orders.length > 0) {
      html += `<div class="row" id="cartrow">
      <div class="card" id="hotdawgcard">
        <div class="card-body"> 
        <h2>Order History</h2>
      ${OrderSummary()} 
      </div>
      </div>
    </div>`;
    }
       html += `</div>`

return html;
};

document.addEventListener("change", (e) => {
	if (e.target.id.startsWith("locations")) {
		resetCart();
		resetTransientState();
		setLocation(parseInt(e.target.value));
	}
});
