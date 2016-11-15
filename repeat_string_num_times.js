// if num is a positive number, return a string repeated num times
// else, return an empty string

function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  } else {
   return "";
  }
}

console.log(repeatStringNumTimes("abc", 3));
