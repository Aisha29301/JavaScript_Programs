// 4. Output of following closure ?

for (var i = 0; i < 3; i++) {
setTimeout(function log() {
console.log(i); // What is logged?
}, 1000);
}

// The code you provided will log the number 3 three times. 