//Genere una tabla de multiplicar del número que el usuario elija.
console.log("Mi tabla de multiplicar");

// Importa el módulo 'prompt-sync' que permite recibir entradas del usuario desde la terminal.

const prompt = require("prompt-sync")();

//Creo las variables para los numeros que me proporcionara el usuario:
const dato1 = prompt("Ingresa un numero: ");
const dato2 = prompt("Ingresa un segundo numero: ");

// Convierte la entrada a número decimal.
const number1 = parseFloat(dato1);
const number2 = parseFloat(dato2);


if (isNaN(number1)&&isNaN(number2)) {
  console.log("Por favor, ingresa numeros válidos.");
} else {
       
let multiplicacion = number1*number2;
console.log("El resultado de la mutiplicacion de los 2 numeros es: "+multiplicacion.toFixed(2));

}