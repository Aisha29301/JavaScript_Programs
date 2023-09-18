// Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc (any combination) using string methods.
// How will you handle that ?

const userInput = "YeS"; 

const standardizedInput = userInput.toLowerCase();

if (standardizedInput === "yes") {
  console.log("The user entered 'yes'."); 
} else {
  console.log("The user did not enter 'yes'.");
}



