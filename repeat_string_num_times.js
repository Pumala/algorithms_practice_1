// if num is a positive number, return a string repeated num times
// else, return an empty string

// Version 1 using repeat method
function repeatStringNumTimes(str, num) {
  if (num > 0) {
    return str.repeat(num);
  } else {
   return "";
  }
}

console.log(repeatStringNumTimes("abc", 3));

// Version 2 using a for loop and a ternary operator to return value
// function repeatStringNumTimes(str, num) {
//   var newStr = "";
//   if (num > 0) {
//     for (var i = 0; i < num; i++) {
//       newStr += str;
//     }
//     return newStr;
//   }
//   return (newStr.length > 0 ? newStr : "");
// }

// Version 3 using a for loop
// function repeatStringNumTimes(str, num) {
//   var newStr = "";
//   if (num > 0) {
//     for (var i = 0; i < num; i++) {
//       newStr += str;
//     }
//     return newStr;
//   } else {
//   return "";
//   }
// }
