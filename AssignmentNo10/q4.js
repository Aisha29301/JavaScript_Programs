// Carefully check the example below:
// a) What will be the output of this program ?
// b) Which function is a Higher Order function here ?
const names= ['John', 'Tina','Kale','Max']
function useFunction(arr,fn){
for(let i=0; i<arr.length; i++){
fn(arr[i]);
}
}
function argFn (name){
console.log("Hello " + name );
}
useFunction(names,argFn);

// a)
// Hello John
// Hello Tina
// Hello Kale
// Hello Max

// b)
// In this code, useFunction is a higher-order function.
