// Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

let num = ['025468'];

const result = num.map(computeDash);

function computeDash(num) {
	let str = num.toString();

	let new_array = [str[0]]; //new_array is array containing first character from 'str' string
	console.log(new_array);

	for (let x = 1; x < str.length; x++) {
		if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
			new_array.push('-', str[x]); //pushing item along with '-' dash and second item in new_array as already first item in added in new_array
			console.log(new_array);
		} else {
			new_array.push(str[x]); //if the two adjacent numbers are not even then no dash between them
			console.log(new_array);
		}
	}

	return new_array.join('');
}
console.log('Output is: ' + result);
