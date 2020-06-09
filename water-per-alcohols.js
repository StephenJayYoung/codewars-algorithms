// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Examples
// "1 beer"  =>  "1 glass of water"
// "1 shot, 5 beers and 1 glass of wine"  =>  "7 glasses of water"

const hydrate = (drinkString) => {
  
  let drinkAmt = [];
  for (i = 0; i<=drinkString.length; i++){
    let isNumber = drinkString[i];
    if (!isNaN(isNumber) && isNumber != " "){
      drinkAmt.push(isNumber);
    }
  } 

  let drinkNum = [];
  for (j = 0; j < drinkAmt.length; j++){
  	let drinksToInt = parseInt(drinkAmt[j], 10);
  	drinkNum.push(drinksToInt);
  }

  let totalDrinks = drinkNum.reduce(function(a, b){
	return a + b;
  }, 0);

  console.log(totalDrinks);
  if (totalDrinks === 1){
	return `${totalDrinks} glass of water`;
  }
  if (totalDrinks > 1){
	return `${totalDrinks} glasses of water`;
  }
  else{
  	return `0 glasses of water`;
  }

}
hydrate("2 glasses of wine");