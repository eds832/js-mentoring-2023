// 5. Create a TypeScript module that exports multiple functions and classes.
// Import the module in another file and demonstrate usage of the exported entities.

import { Animal, Dog, AClass, log } from "./app";

const mammal = new Animal("mammal");
mammal.makeSound();
const fluffy = new Dog("fluffy");
fluffy.makeSound();

const obj2 = new AClass();
obj2.add(5, 5);
