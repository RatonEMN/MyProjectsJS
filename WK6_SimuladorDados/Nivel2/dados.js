import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Funcion que me simula arrojar el dado, entre los numero 1 y 6
function lanzarDado() {
    let max = 6; //Numeros de mi dado
    let min = 1; //Numeros de mi dado
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Math.floor() -> Me redondea siempre hacia abajo
//Math.random() -> Me trae un numero aleatorio entre 0 y 0.99999999



//Funcion en donde guardo los datos de las veces que arroje el dado
export function guardarDatos(){

    const veces = prompt("Ingresa la cantidad de veces que vas a lanzar el dado: ");

    const datosDado = [];

for (let i = 0; i < veces; i++) {
    const numero = lanzarDado();
    datosDado.push(numero);
}

return datosDado;

// console.log(datosDado);

}




