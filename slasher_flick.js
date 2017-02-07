// create a function that takes in 2 values (an array, a number)
// the number is the amount of items removed from the array (starting from 0 index)
// return the new array

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  if (howMany === 0) {
    return arr;
  } else if (howMany === 1) {
    return arr.slice(1);
  } else {
    return arr.splice(howMany, howMany);
  }
}

console.log(slasher([1, 2, 3], 1));
