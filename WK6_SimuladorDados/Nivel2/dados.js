//Funcion que me simula arrojar el dado, entre los numero 1 y 6
function lanzarDado() {
    let max = 6; //Numeros de mi dado
    let min = 1; //Numeros de mi dado
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Math.floor() -> Me redondea siempre hacia abajo
//Math.random() -> Me trae un numero aleatorio entre 0 y 0.99999999



//Funcion en dondo guardo los datos de las veces que arroje el dado
function guardarDatos(veces){

    const datosDado = [];

for (let i = 0; i < veces; i++) {
    const numero = lanzarDado();
    datosDado.push(numero);
}

return datosDado;

}

console.log(guardarDatos(2));


