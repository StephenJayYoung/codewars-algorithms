// Complete the solution so that it reverses the string passed into it.
function solution(str){
  let toArr = str.split('');
  let arrReversed = toArr.reverse();
  let bckwards = arrReversed.toString();
  let newStr= bckwards.replace(/,/g, "");
  return newStr;
}
solution('world');