// return true if all the letters in the word with an index of 1 in the array
// are contained in the word with an index of 0 in the array
// otherwise return false

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  var counter = 0;
  for (var i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) < 0) {
        return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "Hello"]));
