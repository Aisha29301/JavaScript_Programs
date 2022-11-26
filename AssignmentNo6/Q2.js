// Write a javascript function find_largest to return the nth largest number in an array-
// eg - given an array of integers- [3,45,6,7,23,5,7,8]
// find_largest(3) will return third largest number from the above array - which is 8.

let arr = [3, 45, 6, 7, 23, 5, 7, 8];

function find_largest(k) {
	// sort the given array

	// arr.sort((a, b) => a - b).reverse();
	arr.sort((a, b) => b - a);

	// it returns k'th element from sorted array
	// which is the 3rd largest element

	return arr[k - 1];
}

console.log(find_largest(7));
