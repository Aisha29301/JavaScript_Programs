// Create a set object with four random numbers from 0 to 10. Check if this newly created set object has 8 in it. Use set object methods.

const arr = [];
for (let i = 0; i < 4; i++) {
	arr[i] = Math.floor(Math.random() * 11); //integers between 0 to 11 
}
console.log(arr); //array of 4 random integers
const numbers = new Set(arr); //array converted to set called numbers
console.log(numbers);

if (numbers.has(8))  //has() method check in Set whether 8 is present or not
    console.log('8 is present in Set');
else
    console.log('8 is not present in set');
