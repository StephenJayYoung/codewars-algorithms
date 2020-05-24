// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
function abbrevName(name){
  let firstInit = name.charAt(0).toUpperCase();
  let space = name.indexOf(' ');
  let secondInitPosition = space + 1;
  let secondInit = name.charAt(secondInitPosition).toUpperCase();
  let firstAndLast = `${firstInit}.${secondInit}` 
  return firstAndLast;
}
abbrevName("Sam Harris");