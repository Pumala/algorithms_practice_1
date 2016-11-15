// to remove all spaces from a string
// doesn't change original str
// so assign it to the original variable
// or to a new one
var str = "water is super awesome"
str.replace(/\s/g, "");
returns "waterissuperawesome"

// learm more about reg expressions

var s = "ABCblahFoo$%^3l";
var noLetters = s.replace(/[^A-Za-z]+/g, '');
// * the [] represents a character (or a number of different possible characters)
// * the ^ means all characters EXCEPT the ones defined in the brackets
// * A-Z equals capital letters
// * a-z equals lowercase letters

palindrome("1 eye for of 1 eye.")

> var str = "asdasd123?! 54A";
undefined
// only keeps numbers and digits
> str.replace(/^A-Z0-9/ig, "");
'asdasd123?! 54A'
> str.replace(/[^A-Z0-9]/ig, "");
'asdasd12354A
