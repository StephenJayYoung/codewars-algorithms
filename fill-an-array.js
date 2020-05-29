// Write a function that produces an array with the numbers 0 to N-1 in it.
function arr(n){
  let newArr = [];
  for (i = 0; i<n; i++){
    newArr.push(i);
  }
  return newArr;
};
arr(5);