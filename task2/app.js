// 1. Write a JavaScript function that takes an array of numbers as input and returns
// the sum of all even numbers in the array.

const func1 = (arr) => {
  return arr.reduce((acc, arg) => {
    if (arg % 2 === 0) {
      return acc + arg;
    } else {
      return acc;
    }
  }, 0);
};

console.log("func1([1,2,3,4,5,6,7]) = " + func1([1, 2, 3, 4, 5, 6, 7]));

// 2. Write a JavaScript function that takes two input values and
// returns the concatenation of the two values as a string.

const func2 = function (val1, val2) {
  return `${val1}${val2}`;
};

console.log("func2(1,'some value') = " + func2(1, "some value"));
console.log("func2('val','some value') = " + func2("val", "some value"));
console.log("func2(1,2) = " + func2(1, 2));
console.log("func2(true,2) = " + func2(true, 2));

// 3. Write a JavaScript function that checks if a given number is positive, negative,
// or zero and returns the corresponding string: "Positive", "Negative", or "Zero".

const func3 = (num) => {
  if (num > 0) return "Positive";
  if (num < 0) return "Negative";
  return "Zero";
};

console.log("func3(77) = " + func3(77));
console.log("func3(-7) = " + func3(-7));
console.log("func3(0) = " + func3(0));

// 4. Write a JavaScript function that calculates the factorial
// of a given number using a while loop.

const func4 = (num) => {
  if (num < 0 || num % 1 !== 0) return undefined;
  let result = 1;
  let current = num;
  while (current > 0) {
    result *= current;
    current--;
  }
  return result;
};

console.log("func4(7) = " + func4(7));

// 5. Create an object called person with properties name and age.
// Add a method called greet that returns a greeting string using the name property.

const person = {
  name: "John",
  age: 21,
  greet() {
    return "Hello! My name is " + this.name;
  },
};

console.log(person.greet());

// 6. Create a constructor function called `Car` that takes parameters for `make`, `model`,
// and `year`. Add a method called `getInfo` that returns a string containing the car's details.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getInfo = function () {
      return `Car{make:${this.make}, model:${this.model}, year:${this.year}`;
    };
  }
}

const car = new Car("Ford", "Mondeo", 2000);
console.log(car.getInfo());
