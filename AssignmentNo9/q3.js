// What is a lexical scope and how is it related to closure?

// Lexical scoping is primarily related to how variables are looked up and resolved at compile time rather than runtime.
// Closures are closely tied to lexical scope. When a function is defined within another function, the inner function can capture references to variables from the lexical scope of its containing function. These captured references are stored within the closure, allowing the inner function to access those variables even after the containing function has finished executing.

function outerFunction() {
  const outerVar = 10;

  function innerFunction() {
    console.log(outerVar); // innerFunction captures outerVar
  }

  return innerFunction;
}

const closure = outerFunction(); // outerFunction returns innerFunction
closure(); // When called, innerFunction still has access to outerVar
