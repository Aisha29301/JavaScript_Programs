// What string method can be used to check the occurrence of a specified text in a string?

let string =
	"Life isn't about finding yourself. Life is about creating yourself.";
let search = 'Life';
let first = string.indexOf(search);
let second = string.lastIndexOf(search);
let char = string.charAt(36);
console.log(first + ' ' + second);
console.log(char);
