//Cuente cuántos números pares hay entre 1 y 50
const numero = 50;

console.log("Numeros pares del 1 al "+numero);

const divisor = 2;
let numeros_pares = 0;

//Para determinar si un numero es par o impar, se puede saber mediante el residuo de la operacion en este caso JS tiene la opcion de usar % para obtener el residuo de una operacion:

for(let i = 1; i <= numero; i++){
    if(i % 2 === 0){
        numeros_pares++;
    }
}

console.log(`Los numeros pares son: ${numeros_pares}`);

