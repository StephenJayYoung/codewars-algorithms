// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
const sumMix = (x) =>{
  let newX = [];
  for (i=0; i<x.length; i++){
    newX.push(parseInt(x[i]));
  }
  let sum = newX.reduce((a, b) => a + b, 0);
  return sum;
}