// Convert number to reversed array of digits
function digitize(n) {
  output = [],
  sNumber = n.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
  }
  return output.reverse();
}