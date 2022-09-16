// Write a program to find whether a given number is armstrong number or not- The Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153
let r,sum = 0;
let n = 56 ;
// let n = 153 ;
let temp = n;
while(n>0){
    r = n%10;
    sum = sum + (r*r*r);
    n = parseInt(n/10);
}
if(temp == sum){
    console.log(`${temp} is armstrong number`)
}
else{
    console.log(`${temp} is not armstrong number`)
}