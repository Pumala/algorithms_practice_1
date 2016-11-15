// return an array containing the largest num from each array

function largestOfFour(arr) {
  var newArr = [];
  var bigNum = arr.forEach(function(miniArr) {
    var num = miniArr.sort(function(a, b){
      return b - a;
    });
    newArr.push(num.splice(0, 1)[0]);
  });
  return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26],
[32, 35, 37, 39], [1000, 1001, 857, 1]]));
