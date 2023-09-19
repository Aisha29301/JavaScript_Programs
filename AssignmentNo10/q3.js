// Give an example of a Higher Order function and a call back function
// used in the same program.

// Higher-order function: map()
// It takes a callback function as an argument
const numbers = [1, 2, 3, 4, 5];

// Callback function passed to map()
// This function is executed for each element in the array
const squaredNumbers = numbers.map(function (number) {
  return number * number;
});

console.log(squaredNumbers);
