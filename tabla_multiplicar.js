//Genere una tabla de multiplicar del número que el usuario elija.
console.log("Mi tabla de multiplicar");

// Importa el módulo 'prompt-sync' que permite recibir entradas del usuario desde la terminal.

const prompt = require("prompt-sync")();

function TablaMultiplicacion(){

//Creo las variables para el numero que me proporcionara el usuario:
const dato = prompt("Ingresa un numero: ");

// Convierte la entrada a número decimal.
const number = parseFloat(dato);

if (isNaN(number)) {
  console.log("Por favor, ingresa numeros válidos.");
  TablaMultiplicacion();
} else {
  for(let i = 1; i <= 10; i++){
    let multiplicacion = number*i;
    console.log(number+" x "+i+" = "+multiplicacion); 
  }

}
}

TablaMultiplicacion();