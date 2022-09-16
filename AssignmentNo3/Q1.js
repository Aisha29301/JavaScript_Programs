// Using for loops, write a Javascript program to output the following pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let cnt = 1;
let str = '';
for (let i = 1; i <= 4; i++) {
	for (let j = 0; j < i; j++) {
		str = str + cnt + ' ';
		cnt++;
	}
	str += '\n';
}
console.log(`${str}`);
