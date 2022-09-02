// Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function parameters. eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function prime(1,100).


function factorial(n) {
    let fact = 1;

    for (let i = 1; i <= n; i++)
        fact = fact * i;

    return fact;
}
function isPrime(l, u) {
    for (let i = l; i <= u; i++) {

        flag = 1;

        if (i == 0 || i == 1)
            continue;

        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 0;
                console.log(`${i} is not a prime `);
            }
        }
        if (flag == 1)
            console.log(`${i} is a prime number and ` + `factorial of ${i} is ` + factorial(i));
    }

}

isPrime(2, 5);
isPrime(1,100);