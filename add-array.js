// add the numbers in an array together
let initialValue = 0;

let arr = [5, 10, 15];

const reducer = (accumulator, item) => {
  return accumulator + item;
};

let total = arr.reduce(reducer, initialValue)
return total;