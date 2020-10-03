// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
var summation = function (num) {
    var all = [];
    for (i=0; i<=num; i++){
      all.push(i)
    }
    
    let sum = all.reduce((a, b) => a + b, 0);
    return sum;
    
  }
  