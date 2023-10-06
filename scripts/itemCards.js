import { getLocationToys, setToys, getToys, getTransientState, getLocationFood, getFood, setFood, getIceCream, setIceCream, getLocationIceCream, setDrink, getDrinks, getLocationDrink, } from "./dataAccess.js";

const locationFoods = getLocationFood()
const locationToys = getLocationToys()
const locationIceCream = getLocationIceCream()
const locationDrink = getLocationDrink()

export const makeImgCards = (obj) =>{
    const state = getTransientState()
    
    if (state.selectedLocation){
    return `<div class="img-card" style="max-width: 540px;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${obj.img}" class="card-img rounded-start" alt="${obj.desc}">
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="${obj.desc}">.</p>
    <h5 class="${obj.price}"></h5>
    </div>
    </div>
    </div>`;
  };
};

export const ImageCards = ( ) => {
  const state = getTransientState()
  
  let drinkCard = ""
  if(state.selectedDrink){
   drinkCard = locationDrink.map((drink) => {
    if (drink.locationId === state.selectedLocation && drink.drinkId === state.selectedDrink){
   const allDrinks = getDrinks()
   let matchedDrinks= allDrinks.find(thatDrink => thatDrink.id===drink.drinkId)
      return makeImgCards(matchedDrinks)}
   else if (!state.selectedDrink) {return ""}
    }).join('');
  }

  let foodCard = ""
  if (state.selectedLocation) 
  { if(state.selectedFood){
     foodCard = locationFoods.map((food) => {
      if (food.locationId === state.selectedLocation && food.foodId === state.selectedFood){
     const allFood = getFood()
     let matchedFood = allFood.find(thatFood => thatFood.id===food.foodId)
        return makeImgCards(matchedFood)}
     else if (!state.selectedFood) {return ""}
      }).join('');
    }


    let toyCard = ""
    if(state.selectedToy) {
     toyCard = locationToys.map((toy) => {
      if (toy.locationId === state.selectedLocation && toy.toyId === state.selectedToy){
     const allToys = getToys()
     let matchedToys = allToys.find(thatToy => thatToy.id === toy.toyId)
        return makeImgCards(matchedToys)}
     else if (!state.selectedToy) {return ""}
    }).join('');
  }
  

    let iceCreamCard= ""
    if(state.selectedIceCream){
     iceCreamCard = locationIceCream.map((iceCream) => {
      if (iceCream.locationId === state.selectedLocation && iceCream.iceCreamId === state.selectedIceCream){
     const allIceCreams = getIceCream()
     let matchedIceCreams = allIceCreams.find(thatIceCream => thatIceCream.id === iceCream.iceCreamId)
        return makeImgCards(matchedIceCreams)}
     else if (!state.selectedIceCream) {return ""}
    }).join('');
    }
  return foodCard + drinkCard + iceCreamCard + toyCard
}
}
