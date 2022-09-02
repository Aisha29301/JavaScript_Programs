// Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

let sum = 0;
function mulSum(num){
    for(i=1;i<num;i++){
        if(i%3==0 && i%5==0)
            sum = sum + i;
    }
}
mulSum(1000);
console.log("The Sum of multiples of 3 and 5 is : "+sum);