// 1. Explain the difference between synchronous and asynchronous JavaScript code execution
// and provide an example for each.

const info = "Info"; // synchronous execution
console.log(info, "- info printed"); // line by line

fetch("http://any-url") // asynchronous
  .then(() => console.log("Succiess of fetch()")) // (needs time for execution,
  .catch(() => console.log("Failure of fetch()")); // JS engine goes next lines)

console.log("Printed before the result of fetch()");

setTimeout(() => console.log("setTimeout() Finished"), 0 /* only 0 ms */);
// JS engine has seen that this is an asynchrounous operation and goes next lines

console.log("Printed before the result of setTimeout()");

// Many operations are asynchronous:
// - setTimeout, setInterval
// - fetch,
// - callbacks for geolocation,
// - Promises,
// - ajax,
// - filesystem interactions,
// - database calls,
// - DOM event and other listeners,
// - custom asychronous functions

// The end of the execution of an async function is unpredictable,
// so the JS engine moves on to next lines.

// 2. Write JavaScript code that uses the setTimeout function to log a message after
// a specified delay, and then clear the timeout using clearTimeout.

const setT = setTimeout(() => console.log("message"), 0 /* only 0 ms */);
clearTimeout(setT); // most likely that setT won't run

// 3. Write JavaScript code that uses the setInterval function to repeatedly log
// a message at a specified interval, and then clear the interval using clearInterval.

let count = 0;

const setI = setInterval(() => {
  console.log(`setInterval() works, count: ${count}`); // will be printed 3 times
  count++;
  if (count > 2) {
    clearInterval(setI); // then it will be stopped
  }
}, 1000);

// 4. Write JavaScript code that demonstrates the basic syntax of ES6 Promises
// by creating a simple promise that resolves with a value and handles the fulfillment
// and rejection cases.

const condition = "OK"; // "NO"

const promise1 = new Promise((resolve, reject) => {
  if (condition === "OK") {
    resolve("$100");
  } else {
    reject(new Error("bad condition"));
  }
})
  .then(
    (goodResult) =>
      // this will be executed if resolve is executed without errors,
      console.log("Success of Promise:", goodResult) // so promise has success
  )
  .catch(
    (badResult) =>
      // this will be executed if reject is executed or/and an error occures,
      console.log("Failure of Promise:", badResult.toString()) // so promise has failure
  );

// 5. Write JavaScript code that demonstrates the usage of the `async` and
// `await` keywords to handle asynchronous operations in a synchronous-looking manner.

const func1 = () => {
  return new Promise((resolve, reject) => {
    resolve("Result from Promise");
  });
};

const func2 = () => console.log("Promise with its state:", func1());
func2(); // console prints the state of Promise, not a result

func1().then((result) =>
  console.log("'then' after the promise gives the result:", result)
); // we can use 'then' to get the result of promise

const func4 = async () =>
  console.log("Promise gives the result after await:", await func1()); // the same result
func4(); // JS engine awaits in async block for the result of 'await',
// so console prints the result of the promise

// 6. Create a custom Error class called ValidationError that extends the built-in Error class.
// Use this class to throw an error called ValidationError with a custom error message when
// input validation fails.

class ValidationError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ValidationError";
  }
}

const BAD_INPUT = "Bad input";

const validate = (ipt) => {
  if (ipt === BAD_INPUT) {
    throw new ValidationError(`Incorrect input: ${ipt}`);
  } else {
    return true;
  }
};

console.log("Validation result of 'Good input':", validate("Good input"));

try {
  validate("Bad input");
} catch (err) {
  console.log(
    `Result of validation with 'Bad input': Error[name:${err.name}, message:${err.message}]`
  );
}
