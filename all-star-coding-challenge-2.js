// Create a function called that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.
function strCount(str, letter){  
  let counter = 0;
  for (i = 0; i < str.length; i++){
      if (str.charAt(i) === letter){
        counter += 1;
      }
  }
  return counter;
}  
strCount('Hello', 'o');