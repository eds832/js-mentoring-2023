require("./styles/main.scss");

const carImg = document.querySelector("#carImg");
carImg.src = require("./assets/sportcar.svg");
console.log(require("./app").sayHi());
