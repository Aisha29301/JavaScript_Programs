// Write a program to find whether a given number is special number or not- If the sum of the factorial of digits of a number (N) is equal to the number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14

let sum = 0,
	n = 145,
	// n = 120,
	temp = n;
while (n != 0) {
	rem = n % 10;
	sum = sum + factorial(rem);
	n = parseInt(n / 10);
}
function factorial(n) {
	let fact = 1;

	for (let i = 1; i <= n; i++) 
        fact = fact * i;

	return fact;
}
if (sum == temp) 
    console.log(`${temp} is special number`);
else 
    console.log(`${temp} is NOT special number`);
