import sayHi from "./app";
import "./styles/main.scss";
import sportcar from "./assets/sportcar.svg";

const carImg = document.querySelector("#carImg");
carImg.src = sportcar;

console.log(sayHi());
