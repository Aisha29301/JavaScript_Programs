// Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

function trimBetweenString(input) {
	result = input.split(' ').join('');
    // here in split(' ') there is one space and in join('') no space to join i.e to concatenate two words without space
	console.log(result);
}
trimBetweenString('hii girl');
