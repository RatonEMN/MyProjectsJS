//Genere una tabla de multiplicar del número que el usuario elija.

// Importa el módulo 'prompt-sync' que permite recibir entradas del usuario desde la terminal.

const prompt = require("prompt-sync")();

//Creo las variables para los numeros que me proporcionara el usuario:
let dato1 = prompt("Ingresa un numero: ");
let dato2 = prompt("Ingresa un segundo numero: ");

// Convierte la entrada a número decimal.
let number1 = parseFloat(dato1);
let number2 = parseFloat(dato2);
let multiplicacion = number1*number2;

console.log("El resultado de la mutiplicacion de los 2 numeros es: "+multiplicacion);
