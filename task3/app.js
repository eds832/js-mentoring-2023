// 1. Write a JavaScript function that takes an array of numbers as input and returns
// a new array where each element is multiplied by 2.t

const func1 = (arr) => arr.map((element) => element * 2);

const result1 = func1([2, 3, 4]);

console.log("func1([2, 3, 4]) =", result1);

// 2. Write a JavaScript function that takes an array as input and returns the length of the array.

const func2 = (arr) => arr.length;

const result2 = func2([2, 3, true, "a"]);

console.log("func2([2, 3, true, 'a']) =", result2);

// 3. Write a JavaScript function that takes an array of strings as input, sorts the strings
// in ascending order, and returns the sorted array.

const func3 = (arr) => arr.sort();

const result3 = func3(["bc", "ab", "cd", "aa", "a1", "aaa"]);

console.log('func3(["bc", "ab", "cd", "aa", "a1", "aaa"]) =', result3);

// 4. Write a JavaScript function that takes two arrays as input, combines them into
// a single array, and returns the result.

const func4 = (arr1, arr2) => [arr1, arr2].flatMap((elem) => elem);

const result4 = func4([1, 2, 3, 4], ["a", "b"]);

console.log('func4([1, 2, 3, 4], ["a", "b"]) =', result4);

// 5. Write a JavaScript function using an arrow function expression that
// takes two numbers as input and returns their sum.

const func5 = (a, b) => a + b;

const result5 = func5(1, 2);

console.log("func5(1, 2) =", result5);

// 6. Write a JavaScript function that takes multiple arguments using
// the rest operator and returns the sum of all the arguments.
// If no arguments are provided, the function should return 0.

const func6 = (...args) => {
  return args.reduce((acc, arg) => acc + arg, 0);
};

let result6 = func6();

console.log("func6() = ", result6);

result6 = func6(0, -7, 8, 10);

console.log("func6(0, -7, 8, 10) =", result6);

// 7. Write a JavaScript function that demonstrates the concept of variable scope by
// declaring a variable inside a block and trying to access it outside the block.
// Explain the output or error that occurs.

function func7() {
  var varInside; // varInside defined inside of func7 and it's not visible outside func7
}

try {
  console.log(varInside);
} catch (ex) {
  console.log(ex.toString()); // varInside is not defined
}

// 8. Write a JavaScript function that demonstrates closure by creating an inner function
// that has access to the outer function's variables.
// Invoke the inner function and observe the output.

function func8() {
  var var1 = 77;
  return function (arg) {
    console.log(var1 + arg); // var1 from outer function is visible inside of the inner function
  };
}

func8()(23); // 100

// 9. Write a JavaScript function that uses recursion to calculate the factorial
// of a given number.

const func9 = (num) => {
  if (num < 0 || num % 1 !== 0) return undefined;
  function factorial(n) {
    if (n > 0) {
      return n * factorial(n - 1);
    } else {
      return 1;
    }
  }
  return factorial(num);
};

console.log("func9(7) =", func9(7));
