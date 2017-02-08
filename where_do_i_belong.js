// return the index of where the second arg (num) would be if inserted into the array (ascending order)

function getIndexToIns(arr, num) {
  var newArr = arr;
  newArr.push(num);
  newArr.sort(function(a, b) {
    return a - b;
  });
  return newArr.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
