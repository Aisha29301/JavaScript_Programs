// Is filter a Higher Order function in Javascript ? If yes, why ?

// Yes, filter is a higher-order function in JavaScript. A higher-order function is a function that can accept other functions as arguments and/or return functions as their results. filter fits this definition because it accepts a callback function as an argument.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = function (number) {
  return number % 2 === 0;
};

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); 

// Output: [2, 4, 6, 8, 10]
