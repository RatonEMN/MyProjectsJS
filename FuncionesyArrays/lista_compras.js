//Crea una lista de compras y agrega, elimina o busca productos.

//Muestro al usuario un menu y le pido que ingrese una opcion

const prompt = require("prompt-sync")();

function menu(){

console.log("-----Lista de compras-----");
console.log("1. Agregar producto");
console.log("2. Eliminar producto");
console.log("3. Buscar producto");
console.log("3. Ver lista completa");
console.log("3. Salir...");

const opcion = prompt("Ingresa una opcion: ");
const noOpcion = parseInt(opcion);

if (isNaN(noOpcion)) {
  console.log("Por favor, ingresa un opcion válida.");
  menu();
} else {
       
console.log("Tu opcion es valida.");

}

}

menu();