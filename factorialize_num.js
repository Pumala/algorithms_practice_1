// return a factorial of a num

function factorialize(num) {
  var counter = num - 1;
  while (counter > 1) {
    num *= counter;
    counter--;
  }
  return (num > 0 ? num : 1);
}

console.log(factorialize(0));
