// remove all falsy values and return an array with only the truth values

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var newArr = arr.filter(function(item) {
    if (item) {
       return item;
    }
  });
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
