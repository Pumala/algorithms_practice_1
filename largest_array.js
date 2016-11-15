// return the array with the greatest sum

function largestOfFour(arr) {
  var bigArr = arr.map(function(tinyArr){
    return tinyArr.reduce(function(x, y) {
      return x + y;
    }, 0);
  });
  var index = 0;
  var max = 0;
  for(var i = 0; i < bigArr.length; i++) {
    if (bigArr[i] > max) {
      max = bigArr[i];
      index = i;
    }
  }
  return arr[index];
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[4, 5, 1, 3], [1000, 1001, 857, 1], [13, 27, 18, 26], [32, 35, 37, 39]]);
