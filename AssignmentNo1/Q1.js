// Write a program to find whether a given year is a leap year or not.

let year = 2001;
// year = 2004;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
    console.log(year+" is a leap year");  
else
    console.log(year+" is not a leap year");  