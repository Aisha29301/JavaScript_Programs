// Write a Javascript function to test whether the first character of a string is lowercase.

function firstCharLower(str) {
	regex = /^[a-z]/;
	if (regex.test(str)) 
        console.log("first character is LowerCase");
	else 
        console.log("first character is not LowerCase");
}
firstCharLower('Aisha');
firstCharLower('aisha');
firstCharLower('AISHA');
firstCharLower('aISHA');
