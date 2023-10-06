import { getLocationToys, setToys, getToys, getTransientState, getLocationFood, getFood, setFood, getIceCream, setIceCream, getLocationIceCream, setDrink, getDrinks, getLocationDrink, findMatchedDrinkInDatabase, findMatchedFoodInDatabase, findMatchedIceCreamInDatabase, findMatchedToyInDatabase} from "./dataAccess.js";

const locationFoods = getLocationFood()
const locationToys = getLocationToys()
const locationIceCream = getLocationIceCream()
const locationDrink = getLocationDrink()

export const makeImgCards = (obj) =>{
    const state = getTransientState()
    
    if (state.selectedLocation){
    return `<div class="img-card my-card" style="max-width: auto;">
    <div class="row g-0">
    <div class="col-md-4">
    <img src="${obj.img}" class="card-img rounded-start card-photo" alt="${obj.desc}">
    </div>
    <div class="col-md-8">
    <div class="card-body">
    <h5 class="name">${obj.name}</h5>
    <p class="desc">${obj.desc}</p>
    <h5 class="price">${obj.price}</h5>
    </div>
    </div>`;
  };
};

export const ImageCards = ( ) => {
  const state = getTransientState()
  
  let drinkCard = ""
  if(state.selectedDrink){
   drinkCard = locationDrink.map((drink) => {
    if (drink.locationId === state.selectedLocation && drink.id === state.selectedDrink){
   const allDrinks = getDrinks()
   let matchedDrinks= findMatchedDrinkInDatabase(state)
      return makeImgCards(matchedDrinks)}
   else if (!state.selectedDrink) {return ""}
    }).join('');
  }

  let foodCard = ""
  if (state.selectedLocation) 
  { if(state.selectedFood){
     foodCard = locationFoods.map((food) => {
      if (food.locationId === state.selectedLocation && food.id === state.selectedFood){
     const allFood = getFood()
     let matchedFood = findMatchedFoodInDatabase(state)
        return makeImgCards(matchedFood)}
     else if (!state.selectedFood) {return ""}
      }).join('');
    }


    let toyCard = ""
    if(state.selectedToy) {
     toyCard = locationToys.map((toy) => {
      if (toy.locationId === state.selectedLocation && toy.id === state.selectedToy){
     const allToys = getToys()
     let matchedToys = findMatchedToyInDatabase(state)
        return makeImgCards(matchedToys)}
     else if (!state.selectedToy) {return ""}
    }).join('');
  }
  

    let iceCreamCard= ""
    if(state.selectedIceCream){
     iceCreamCard = locationIceCream.map((iceCream) => {
      if (iceCream.locationId === state.selectedLocation && iceCream.id === state.selectedIceCream){
     const allIceCreams = getIceCream()
     let matchedIceCreams = findMatchedIceCreamInDatabase(state)
        return makeImgCards(matchedIceCreams)}
     else if (!state.selectedIceCream) {return ""}
    }).join('');
    }
  return foodCard + drinkCard + iceCreamCard + toyCard
}
}
