// Write a program to find the factorial of a number.

let fact = 1;
let n = 5;
// n = 7
// n = -4;
// n = 0;
if(n < 0)
    console.log("Factorial of negative number does not exits");
else{
    for(let i=1;i<=n;i++)
        fact = fact * i;    
    console.log(`Factorial is ${fact}`);    
}
