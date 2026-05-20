

//Funcion que me simula arrojar el dado, entre los numero 1 y 6
function obtenerRangoAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//Defino mi arreglo en donde guardare mis datos
const arregloDatos = [];


//Funcion en dondo guardo los datos de las veces que arroje el dado
function guardarDatos(veces){

for (let i = 0; i < veces; i++) {
    const lanzarDado = obtenerRangoAleatorio(1, 6);
    arregloDatos.push(lanzarDado);
}

console.log(`Estos son tus numeros ${arregloDatos}`);
promedio(arregloDatos);
conteo(arregloDatos); 
}


function promedio(arreglo){
    let total = 0;
    
    for (let index = 0; index < arreglo.length; index++) {
        let numero = arreglo[index];
        total = total + numero;
    }
    
    let promedio = total / arreglo.length;

    console.log(`El promedio es ${promedio}`);
    
}



function conteo(arreglo){

    const conteoArreglo = {};

for (let i = 0; i < arreglo.length; i++) {
    let numeroActual = arreglo[i];

    if(conteoArreglo[numeroActual]){
        conteoArreglo[numeroActual]++;
    } else {
        conteoArreglo[numeroActual] = 1;
    }
}
console.log(`Las veces que se repitieron los datos son:`);
console.log(conteoArreglo);

}



//Ejecucion de la funcion de acuerdo
guardarDatos(6);