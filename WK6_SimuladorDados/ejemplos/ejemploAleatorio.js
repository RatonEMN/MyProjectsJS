function obtenerRangoAleatorio(min, max) {
    let no_aleatorio = Math.random();
    console.log(`Numero aleatorio: ${no_aleatorio}`);

    let diferencia = max - min;
    console.log(`Diferencia entre max y min: ${diferencia}`);
    
    let difMas1 = diferencia + 1;
    console.log(`Diferencia mas 1: ${difMas1}`);

    let calculo = no_aleatorio * difMas1;
    console.log(`El calculo de aletorio * la diferencia mas 1 es: ${calculo}`)
    
    let resultado = Math.floor(calculo + min); // min seria igual a 20
    console.log(`Resultado de sumar el calculo mas lo minimo ${resultado}`);

}

// Ejemplos de uso:
const lanzarDado = obtenerRangoAleatorio(20, 40);   // Devuelve entre 1 y 6