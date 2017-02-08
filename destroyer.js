// remove all elements from the initial array that are of the same value as the arguments
function destroyer(arr) {
  var extraArgs = Array.from(arguments).splice(1);
  // Remove all the values
  var newArr = arr.filter(function(num) {
    return extraArgs.indexOf(num) < 0;
  });
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
