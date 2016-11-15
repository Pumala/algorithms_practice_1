// return the longest word and its length from the provided string

function findLongestWord(str) {
  var arr = str.split(" ");
  var lengths = arr.sort(function(a, b) {
    return b.length - a.length
  });
  return "Word: " + lengths[0] + ", Length: " + lengths[0].length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
