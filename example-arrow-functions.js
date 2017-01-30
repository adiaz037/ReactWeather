//challenge area
//Create a arrow function that does what this function does
function add (a,b){
  return a+ b;
}

//statement version
var addStatement = (a, b) => {
  return a+b;
}
console.log(addStatement(4,7));

//The statement version should be used when you are going to write more
//than one line in the function

//Expression version
var addExpresion = (a, b) => a+b;
console.log(addExpresion(3,-2));

//when doing the expression version, anything that comes after the arrow
// automatically gets returned.
