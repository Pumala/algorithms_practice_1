// return the first letter of each string in the phrase capitalized

function titleCase(str) {
  var arr = str.toLowerCase().split(" ");
  var newString = "";
  var counter = 0;
  arr.map(function(word) {
    newString += (counter === 0 ? "" : " ");
    newString += word[0].toUpperCase();
    newString += word.split("").splice(1).join("");
    counter++;
  });
  return newString;
}

console.log(titleCase("I'm a little tea pot"));
