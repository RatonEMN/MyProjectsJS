//NAMED EXPORT  ---- Se usan cuando necesito funciones de una coleecion de herramientas
import { sumar as sumarTotal, restar, multiplicar } from "./math.js"; //El nombre de la funcion tiene que coincidir se usan {}

console.log(sumarTotal(10, 10));
console.log(restar(10, 5));
console.log(multiplicar(2, 5));


//DEFAULT EXPORT  ---Se usa cuando el archivo tiene un solo obejtivo(obtener un usuario, una clase, un componente, etc)

import cualquierCosa from "./saludo.js"; //No usa {} por que solo nos traemos una funcion, tampoco es necesario que los nombres coincidan

console.log(cualquierCosa("Emanuel"));



//Mas ejemplos:
import { saludar, capitalizar } from "./text.js";

console.log("---------------------------------");

console.log(sumarTotal(5, 5));
console.log(multiplicar(2, 10));

console.log(saludar("Emanuel"));
console.log(capitalizar("javascript"));