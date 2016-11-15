function palindrome(str) {
  str = str.replace(/[^A-Z0-9]/ig, "");
  str = str.toLowerCase().split("");
  var length = str.length;
  var middleIndex = Math.floor(length / 2);
  if ((length % 2) !== 0) {
    str.splice(middleIndex, 1);
    length -= 1;
  }
  var counter = 0;
  var is_palindrome = true;
  while (counter < middleIndex) {
    if (str[counter] === str[length - 1]) {
      is_palindrome = true;
    } else {
      is_palindrome = false;
      break;
    }
    counter++;
    length--;
  }
  return is_palindrome;
}



console.log(palindrome("moom"));
