// Check if a string's ending characters match the target
// return a boolean

function confirmEnding(str, target) {
  var targetLength = target.length;
  var index = str.length - targetLength;
  var newStr = str.slice(index);
  if (newStr === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
