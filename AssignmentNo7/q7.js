// How can you break a string to a newline in Javascript ?

const str1 = 'The only impossible journey \nis the one you never begin.\n';
const str2 = `The only impossible journey 
is the one you never begin.\n`;

str3 = str1.split(' ').join('\n');

console.log(str1);
console.log(str2);
console.log(str3);
