// Implement a class hierarchy using inheritance and
// demonstrate method overriding and calling super methods.

class Animal {
  // this field will be inherited
  kind: string;

  constructor(kind: string) {
    this.kind = kind;
  }

  makeSound() {
    console.log(`The animal of kind ${this.kind} makes a sound`);
  }
}

class Dog extends Animal {
  nickname: string;

  constructor(nickname: string) {
    super("dog");
    this.nickname = nickname;
  }
  // overriden method
  makeSound() {
    // calling super method
    super.makeSound();
    // own behavior
    console.log(`The ${this.kind} with nickname ${this.nickname} barks`);
  }
}

const beast: Animal = new Animal("beast");
beast.makeSound();

const rex: Dog = new Dog("Rex");
rex.makeSound();

// 2. Create a TypeScript interface representing a database entity with properties such
// as ID, name, and description. Implement the interface in a class.

interface DatabaseEntity {
  id: number;
  name: string;
  description: string;
}

class MySQLDatabaseEntity implements DatabaseEntity {
  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, descriprion: string) {
    this.id = id;
    this.name = name;
    this.description = descriprion;
  }
}

// 3. Implement a generic class for a stack data structure that supports operations like
// push, pop, and peek. Demonstrate type safety and usage of the stack class by implementing Generics.

class StackData<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numberStack: StackData<number> = new StackData<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
// numberStack.push("4"); error
console.log(numberStack.pop()); // 3
console.log(numberStack.peek()); // 2

const stringStack: StackData<string> = new StackData<string>();
stringStack.push("#1");
stringStack.push("#2");
console.log(stringStack.pop()); // #2
console.log(stringStack.peek()); // #1

// 4. Use decorators to implement logging functionality for a class,
// where all method invocations are logged with their arguments and return values.

function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const targetMethod = descriptor.value;

  descriptor.value = async function (...args: any[]) {
    try {
      const result = await targetMethod.apply(this, args);
      console.log(
        `Method '${key}' called with arguments: ${JSON.stringify(
          args
        )} and returned: ${JSON.stringify(result)}`
      );
      return result;
    } catch (e) {
      console.log(
        `Method '${key}' called with arguments: ${JSON.stringify(
          args
        )} and produced Error: ${e}`
      );
    }
  };
  return descriptor;
}

class AClass {
  @log
  add(a: number, b: number) {
    return a + b;
  }
}

const obj: AClass = new AClass();
obj.add(3, 4); // Method 'add' called with arguments: [3,4] and returned: 7

// 5. Create a TypeScript module that exports multiple functions and classes.
// Import the module in another file and demonstrate usage of the exported entities.

export { Animal, Dog, AClass, log };

// 6. Use the keyof keyword to create a function that accepts an object and a key,
// and returns the value corresponding to the key from the object.

function getValueByKey<T extends object, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}

console.log(`rex nickname: ${getValueByKey(rex, "nickname")}`);

// 7. Implement an async/await function that fetches data from an API and
// demonstrates error handling and handling of async operations.

async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

(async () => {
  try {
    const data = await fetchData(
      "https://official-joke-api.appspot.com/random_joke"
    );
    console.log("Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
})();

// 8. Create a TypeScript type declaration file for an external library that lacks TypeScript support.
// Declare the necessary types and interfaces to enable type checking and autocompletion for the library.

// import { sum } from "./***/an-external-library";
// import { Fish } from "./***/an-external-library";

// const result = sum(10, 20); // checking is OK
// const result2 = sum("10", 20); // checking with an error

const salmon: Fish /** checking is OK */ = {
  kind: "salmon",
  length: 50,
  swim() {
    console.log("The salmon is swimming.");
  },
};

// 9. Configure the tsconfig.json file to include custom compiler options
// such as enabling strict null checks, strict mode, and specifying custom typings directories.

// "strict": true enables all strict type checking options.
// "strictNullChecks": true enables strict null checks.
// "esModuleInterop": true enables interoperability between CommonJS and ES6 modules.
// "paths": {"@typings/*": ["./typings/*"]} specifies custom typings directories.
