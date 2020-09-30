// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

function noBoringZeros(n) {
  let str = n.toString();
  let strCharacters = str.split("").reverse().join('');
  let noZeros = parseInt(strCharacters);
  let a = noZeros.toString().split("").reverse().join('');
  let answer = Number(a); 
    if (str.charAt(0) == "-"){
      return -Math.abs(answer);
    } 
  else{
    return answer;
  }
}
