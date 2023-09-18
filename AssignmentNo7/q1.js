// Input a String S, and check its length and if the length is greater than 4,
// stringTruncation the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...


function stringTruncation(input) {
    if (input.length > 4) {
       return input.substring(0, 4) + '...';
    // here if length of string given is greater than 4 then print string upto 4 letter 
    // which is substring of main string "input"
    }
    else{
        return input;
    }
};
console.log(stringTruncation("ice"))
console.log(stringTruncation("icecream"))