// Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.
// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string.

// Input string
const S = "This is a sample string with repeating characters";

// a) Convert the String into upper case.
const upperCaseS = S.toUpperCase();
console.log("a) Uppercase:", upperCaseS);

// b) Convert only the first character to uppercase.
const firstCharUpperCase = S.charAt(0).toUpperCase() + S.slice(1);
console.log("b) First char uppercase:", firstCharUpperCase);

// c) Convert the String into lower case.
const lowerCaseS = S.toLowerCase();
console.log("c) Lowercase:", lowerCaseS);

// d) Break the string into two halves and swap them.
const midpoint = Math.ceil(S.length / 2);
const firstHalf = S.slice(0, midpoint);
const secondHalf = S.slice(midpoint);
const swappedString = secondHalf + firstHalf;
console.log("d) Swapped halves:", swappedString);

// e) Count the repeating characters.
const charCount = {};
for (const char of S) {
  charCount[char] = (charCount[char] || 0) + 1;
}
console.log("e) Character count:", charCount);

// f) Reverse the string.
const reversedString = S.split("").reverse().join("");
console.log("f) Reversed:", reversedString);





