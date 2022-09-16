/* This assignment will help you interpret mathematical relationships both
algebraically and geometrically.

Create a function that takes a number (step) as an argument and returns the
number of matchsticks in that step. See step 1, 2 and 3 in the image above.
Take input from the user in the function parameter and return the output
using the return statement.

examples-
matchHouses(1) ➞ 6

matchHouses(4) ➞ 21
matchHouses(87) ➞ 436 */

function matchHouses(n) {
	let ans = 6 * n; //we know that one home using match house requires 6 matchsticks
	let result = ans - (n - 1); //here we have eliminated common matchstick between house as the house and adjacent to eachother
	return result;
}
console.log(matchHouses(1));
console.log(matchHouses(2));
console.log(matchHouses(3));
console.log(matchHouses(4));
console.log(matchHouses(87));
// here 2 are homes created by matchhouses
