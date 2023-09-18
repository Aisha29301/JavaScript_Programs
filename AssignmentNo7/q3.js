// Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”

function replaceAlternate(input) {
	input = input.split(' ').reverse().join(' ');
	console.log(input);
}
replaceAlternate('hii girl');

//another way
str = 'abcd xyz';
list = str.split(' ');
// console.log(list);  // [ 'abcd', 'xyz' ]

arr = [];
arr1 = list[0];
arr2 = list[1];

arr.push(arr2);
arr.push(arr1);

// console.log(arr); //[ 'xyz', 'abcd' ]
