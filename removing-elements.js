// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
// function removeEveryOther(arr){
  let newArr = [];
  for (i = 0; i < arr.length; i++){
  	let even = i % 2;  
  	if (even === 0){
  		newArr.push(arr[i])
  	}
  }
  return newArr;
}
removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Hello Again']);