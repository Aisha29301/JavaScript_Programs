// Write a function using switch case to find the grade of a student based on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.

function Marks(mks) {
    switch (true) {
        case mks >= 90 && mks <= 100:
            result = "S Grade";
            break;
        case mks >= 80 && mks < 90:
            result = "A Grade";
            break;
        case mks >= 70 && mks < 80:
            result = "B Grade";
            break;
        case mks >= 60 && mks < 70:
            result = "C Grade";
            break;
        case mks >= 50 && mks < 60:
            result = "D Grade";
            break;
        case mks >= 40 && mks < 50:
            result = "E Grade";
            break;
        case mks >= 0 && mks < 40:
            result = "Failed";
            break;
        default:
            result = "Enter some valid marks";
            break;
    }
}
Marks(90);
console.log(`A student has got ${result}`);
// Marks(0);
// Marks(80);
// Marks(50);
// Marks(-1);