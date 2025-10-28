//Crea una función que convierta grados Celsius a Fahrenheit.

console.log("Conversor de grados centigrados a farenheit");

//Formula para convertir grados celsius a farenheit (0°C × 9/5) + 32 = 32°F

//Declaro las variables que necesito para hacer mi conversion
const escala = 1.8; //1.8 Equivale a la fraccion 9/5
const partida_farenheit = 32;

const prompt = require("prompt-sync")();

function conversor(){

const dato_celcius = prompt("Temperatura Celcius: ");

// Convierte la entrada a número decimal.
const celcius = parseFloat(dato_celcius);

if (isNaN(celcius)) {
  console.log("Por favor, ingresa un número válido.");
  conversor();
} else {
       
let farenheit = (celcius * escala) + partida_farenheit;  
console.log("Temperatura Farenheit: "+farenheit.toFixed(1));

}

}

conversor();