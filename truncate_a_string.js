// if the num is less than or equal to length of the string
// return the string as is
// else, return the string with a length of num
// the rest of the string has been truncated
// also the last 3 characters in the returning string are '...'

function truncateString(str, num) {
  var newStr = "";
  var dots = "...";
  var length = str.length;

  if (length <= num) {
    return str;
  } else if (num <= 3) {
      newStr = str.slice(0, num) + dots;
      return newStr;
  } else {
    newStr = str.slice(0, num - 3) + dots;
    return newStr;
  }
}

console.log(truncateString("Absolutely", 2));
