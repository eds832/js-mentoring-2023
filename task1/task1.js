// 1. Write a JavaScript function that takes two numbers as parameters and returns their sum.
let func1 = (a, b) => a + b;

console.log("func1(2, 3) = " + func1(2, 3));

// 2. Write a JavaScript function that checks if a variable is of type 'string'
// and returns true if it is, false otherwise.

let func2 = (a) => typeof a === "string";

console.log('func2("Some String") = ' + func2("Some String"));
console.log("Primitive number func2(5) = " + func2(5));
console.log("Primitive boolean func2(true) = " + func2(true));
console.log("arrow function func2(func1) = " + func2(func1));
console.log("Object func2({}) = " + func2({}));
console.log("func2(undefined) = " + func2(undefined));

// 3. Write a JavaScript function that checks if a given value is a primitive data type
// (number, string, boolean, null, or undefined) and returns true if it is, false otherwise.

let func3 = (a) =>
  a === null ||
  a === undefined ||
  typeof a === "number" ||
  typeof a === "boolean" ||
  typeof a === "string";

console.log("Primitive number func3(5) = " + func3(5));
console.log('func3("Some Primitive String") = ' + func3("Some String"));
console.log("Primitive boolean func3(true) = " + func3(true));
console.log("func3(null) = " + func3(null));
console.log("func3(undefined) = " + func3(undefined));
console.log("Object func3({}) = " + func3({}));
console.log("arrow function func3(func1) = " + func3(func1));

// 4. Explain the concept of hoisting in JavaScript and provide an example
// to demon8strate the difference between hoisting with var and hoisting with let (or const).
console.log(
  "var v1 is not defined here, but v1 declaration 'hoising' to the top - v1 = " +
    v1
);
var v1 = "a";

try {
  console.log(v2);
} catch (e) {
  console.log("let v2 cannot be accessed before its declaration: " + e);
}
let v2 = "b";

// 5. Compare and explain the differences between var, let,
// and const when declaring variables in JavaScript.

// console.log(v3); - const cannot be accessed before initialization
// const must be initalized in the line of declaration and can't be re-assigned/re-declared
const v3 = { m: 0 };
// v3 = { m: 1 }; error: Assignment to constant variable
v3.m = 1; // this works
// let - must be used only after declaration, can be initialized later
let v4;
console.log(v4);
// var - can be used as underfied before its declaration, to avoid such a problem let and const were introduced
// Global var without 'var' is a bad way to use var, the same inside a function:

bad_global_var = "bad"; // must be defined and initialize in the same line and can be used after that
console.log(bad_global_var);

let strangeFunc = function () {
  func_bad_var = 1;
  console.log(func_bad_var);
};

strangeFunc();
console.log("Here func_bad_var is also accessible: " + func_bad_var);

// 6. Write a JavaScript function that checks if a given value is an object and
// returns true if it is, false otherwise.
let func6 = (a) => a !== null && typeof a === "object";

console.log("Object func6({}) = " + func6({}));
console.log("Primitive number func6(5) = " + func6(5));
console.log('func6("Some Primitive String") = ' + func6("Some String"));
console.log("Primitive boolean func6(true) = " + func6(true));
console.log("func6(null) = " + func6(null));
console.log("func6(undefined) = " + func6(undefined));
console.log("arrow function func6(func1) = " + func6(func1));
