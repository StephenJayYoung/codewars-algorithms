// Write function isPalindrome that checks if a given string (case insensitive) is a palindrome.
const isPalindrome = (x) => {
  let reversed = x.toLowerCase().split("").reverse().join("");
  let upperCase = x.toLowerCase();
  if (upperCase == reversed){
    return true
  }
  else{
    return false;
  }
}