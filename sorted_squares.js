// goal: given a sorted array containing both positive and negative integers
// return a sorted array of their squared values

var nums = [-8, -4, -2, -1, 3, 4, 5, 6, 7];

// written for sorted arrays (w/ negative and positive integers)
function squared(arr) {
  var firstIndex;
  var nextIndex;
  var squaredArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      firstIndex = i;
      break;
    }
    // if there are no positive integers,
    // then the value is the smallest negative integer
    firstIndex = arr.length - 1;
  }

  while (arr.length !== 0) {
    // we want to compare it to the smallest neg int
    // whose index is before the smallest pos int
    nextIndex = firstIndex - 1;

    // use Math.abs to convert any neg ints into pos ints
    var num1 = Math.abs(arr[firstIndex]);
    var num2 = Math.abs(arr[nextIndex]);

    // if num1 is less than num2 or there is only 1 int left in the arr
    if ((num1 <= num2) || (arr.length === 1)) {
      // add squared value of num1 to squaredArr
      squaredArr.push(arr[firstIndex] * arr[firstIndex]);
      // then remove it from arr
      arr.splice(firstIndex, 1);
    } else {
      // add the squared value of num2 to squaredArr
      squaredArr.push(arr[nextIndex] * arr[nextIndex]);
      // then remove it from arr
      arr.splice(nextIndex, 1);
      // after splicing nextIndex, which came before firstIndex,
      // we need to then
      // update firstIndex by subtracting 1
      // because the order of arr changes
      // we want to continuously keep
      // track of the positive index/smallest neg int
      firstIndex -= 1;
    }
    // if firstIndex is equal to the length of arr
    // then assign it to the last index in arr
    if (firstIndex === arr.length) {
      firstIndex = arr.length - 1;
    }
  }
  return squaredArr;
}

console.log(squared(nums));
