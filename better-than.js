// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  let classPointsArr = [];
  for (i = 0; i < classPoints.length; i++){
    classPointsArr.push(i);
  }
  let sum = classPointsArr.reduce(add,0); // with initial value to avoid when the array is empty
  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log(sum);
  if (sum / classPoints.length > yourPoints){
    return 'False';
  }
  else{
    return 'True'
  }
}
betterThanAverage([100, 200, 500, 500, 900], 9000)
