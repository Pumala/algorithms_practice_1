
// 1 way
function factorialize(num) {
  var product = num;
  
  for (var i = num - 1; i >= 2; i--) {
    product *= i;
  }
  return (product > 0) ? product : 1;
}

console.log(factorialize(5));

// 2nd way
function factorialize(num) {
  var counter = num - 1;
  while (counter > 1) {
    num *= counter;
    counter--;
  }
  return (num > 0 ? num : 1);
}

console.log(factorialize(5));