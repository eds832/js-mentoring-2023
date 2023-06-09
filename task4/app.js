// 1. Write a JavaScript function that demonstrates the concept of this by creating
// an object with a method that uses this to access its own property.

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello(greeting = "Hello!", question = "What is your name?") {
    console.log(`${greeting} My name is ${this.name}. ${question}`);
  }
}

const fred = new Person("Fred");

fred.sayHello();

// 2. Write a JavaScript function that demonstrates the concept of prototype by adding
// a new method to the prototype of an object and accessing it from an instance of that object.

fred.__proto__.sayTime = function () {
  console.log(new Date().toTimeString());
};

fred.sayTime();

const gretta = new Person("Gretta");

gretta.sayTime(); // Gretta also knows how to say time (from Person)

function Person2(name) {
  this.name = name;
}

const mary = new Person2("Mary");

Person2.prototype.sayDay = function () {
  // mary.__proto__.sayDay also works
  console.log(new Date().toDateString());
};

mary.sayDay();

// 3. Write a JavaScript function that demonstrates the usage of the call method to
// invoke a function with a specific "this" value and additional arguments.

const brian = {
  name: "Brian",
};

const funcSayHelloFromPersonPrototype = Person.prototype.sayHello;
funcSayHelloFromPersonPrototype.call(brian, "Hi!", "How are you doing?");

// 4. Write a JavaScript function that demonstrates the usage of the apply method to
// invoke a function with a specific "this" value and an array of arguments.

funcSayHelloFromPersonPrototype.apply(mary, [
  "Welcome here!",
  "What is the weather outside?",
]); // apply() method works similarly to call(), but takes an array of arguments.

// 5. Write a JavaScript function that demonstrates the usage of the `bind
// method to create a new function with a specific "this" value.

const bindSayHelloToPiter = funcSayHelloFromPersonPrototype.bind({
  name: "Piter",
});
bindSayHelloToPiter("Welcome!");

// 6. Write a JavaScript constructor function that creates instances of
// a Book object with properties for title and author.

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

const book1 = new Book("Adam D. Scott", "JavaScript Cookbook");

console.log(book1);

// 7. Explain the concept of prototypes in JavaScript and how they are used to
// achieve inheritance and share properties and methods between objects.

// Every JS object has a prototype. If we use a property or a method of an object
// JS engine looks at the object, if the object doesn't have a property/method, the engine
// looks for the object prototype. If nothing found there will be an error.
// Using prototype we can add methods to a prototype of an object (as in # 2.)
console.log(fred.__proto__ === Person.prototype); // we got the same prototype
console.log(mary.__proto__ === Person2.prototype); // true
console.log(mary.__proto__.__proto__.__proto__); // null is on the root of the proto tree
console.log(fred.__proto__.__proto__.__proto__); // null

const baseObj = {};

const properties = {
  name: {
    value: "Jack",
    configurable: true, // default false for Object.create
    enumerable: true, // default false for Object.create
    // writable: true, // default false for Object.create
  },
  introduce: {
    value: function () {
      console.log(`Hey! I am ${this.name}.`);
    },
  },
};

const jack = Object.create(baseObj, properties); // creates a new object jack from the prototype
// of baseObj using properties

console.log("jack !== baseObj", jack !== baseObj); // jack is a new object
jack.name = "Fiona";
jack.introduce(); // if not writable, name is still Jack, not Fiona
console.log(Object.getOwnPropertyDescriptor(jack, "name"));

const properties2 = {
  name: "Fiona", // by default it is configurable, writable and enumerable for Object.assign
  introduce() {
    console.log(`Hey! I am ${this.name}.`);
  },
};

const fiona = Object.assign(baseObj, properties2); // assigins properties to the prototype of baseObj

console.log("fiona === baseObj", fiona === baseObj); // fiona is still baseObj

fiona.introduce();
baseObj.introduce();
fiona.name = "Alisa";
baseObj.introduce();
console.log(Object.getOwnPropertyDescriptor(fiona, "name"));

// 8. Create a JavaScript class called Rectangle that represents a rectangle
// with properties for width and height. Include a static method calculateArea
// that calculates and returns the area of the rectangle.

class Rectangle {
  constructor(width, height) {
    if (width <= 0 || height <= 0)
      throw new Error(`Incorrect input: width:${width}, height:${height}.`);
    this.width = width;
    this.height = height;
  }
  static calculateArea(rect) {
    return rect.width * rect.height;
  }
}

const rect1 = new Rectangle(2, 3);
console.log("rec1 area =", Rectangle.calculateArea(rect1));

//const rect2 = new Rectangle(-1, 1); // error
