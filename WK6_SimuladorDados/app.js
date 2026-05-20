function obtenerRangoAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejemplos de uso:
   // Devuelve entre 1 y 6

const arregloDatos = [];


function guardarDatos(veces){

for (let i = 0; i < veces; i++) {
    const lanzarDado = obtenerRangoAleatorio(1, 6);
    arregloDatos.push(lanzarDado);
}

console.log(arregloDatos);
    
}


guardarDatos(6);


const arregloNuevo = [1,2,10,20];

function promedio(arregloNuevo){
let total = 0;

    for (let index = 0; index < arregloNuevo.length; index++) {
        let numero = arregloNuevo[index];
        total = total + numero;
    }

    return total;

}

console.log(promedio(arregloNuevo));