// return the reversed form of a string
function reverseString(str) {
  var newStr = "";
  var counter = str.length;

  while (counter > 0) {
    newStr += str[counter - 1];
    counter--;
  }
  return newStr;
}

console.log(reverseString("hello"));
