import { guardarDatos } from "./dados.js";
import { promedio,conteo,masRepetido } from "./estadisticas.js";

console.log("Bienvenido!!!!");

const arregloDatos = guardarDatos();

console.log("Numeros: "+arregloDatos);

const avg = promedio(arregloDatos);

console.log("Promedio: "+avg);

const noVeces = conteo(arregloDatos);

console.log("Numero de veces:")
console.log(noVeces);

const Max = masRepetido(noVeces);
console.log(Max);



