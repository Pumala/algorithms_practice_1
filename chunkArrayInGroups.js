// write a function that splits an array into another array whose
// length === size
// return it as a 2-dimensional array

function chunkArrayInGroups(arr, size) {
  var mamaArr = [];
  var babyArr = [];

  for (var i = 1; i <= arr.length; i++) {
    babyArr.push(arr[i - 1]);
    if (i % size === 0) {
      mamaArr.push(babyArr);
      babyArr = [];
    }
  }
  if (babyArr.length > 0) {
    mamaArr.push(babyArr);
  }
  return mamaArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));

// function chunkArrayInGroups(arr, size) {
//   var mamaArr = [];
//   var childArr = [];
//
//   for(var i = 1; i <= arr.length; i++) {
//     childArr.push(arr[i - 1]);
//     if (i % size === 0) {
//       // push into arr when length === size
//       mamaArr.push(childArr);
//       // clear
//       childArr = [];
//   }
//   if (childArr.length > 0) {
//     mamaArr.push(childArr);
//   }
//   return mamaArr;
// }
//
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));



// function chunkArrayInGroups(arr, size) {
//   var mamaArr = [];
//   var childArr = [];
//   var babyArr = [];
//
//   for(var i = 1; i <= arr.length; i++) {
//     childArr.push(arr[i - 1]);
//     if (i % size === 0) {
//       // push into arr when length === size
//       mamaArr.push(childArr);
//       // clear
//       childArr = [];
//     } else if ((((i + 1) > size) && ((arr.length - (size + 1)) <= size))) {
//       // childArr.push(arr[i - 1]);
//     }
//   }
//   if (childArr.length > 0) {
//     mamaArr.push(childArr);
//   }
//   return mamaArr;
// }
// function chunkArrayInGroups(arr, size) {
//   var mamaArr = [];
//   var childArr = [];
//   for(var i = 1; i <= arr.length; i++) {
//     childArr.push(arr[i - 1]);
//     if (i % size === 0) {
//       // push into arr when length === size
//       mamaArr.push(childArr);
//       // clear
//       childArr = [];
//     } else if (((i > size) && ((arr.length - size) < size))) {
//       babyArr.push(arr[i - 1]);
//     }
//     mamaArr.push(babyArr);
//   }
//   return mamaArr;
// }

// function chunkArrayInGroups(arr, size) {
//   var mamaArr = [];
//   var childArr = [];
//   for(var i = 1; i <= arr.length; i++) {
//     childArr.push(arr[i - 1]);
//     if ((i % size === 0) || ((i > size) && ((arr.length - size) < size))) {
//       // push into arr when length === size
//       mamaArr.push(childArr);
//       // clear
//       childArr = [];
//     }
//   }
//   return mamaArr;
// }
//
// console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
