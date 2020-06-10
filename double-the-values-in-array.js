// Use map() to double the values in an array
const double = (array) => {
  let doubles = array.map(function(index){
    return index * 2;
  });
  return doubles;
}