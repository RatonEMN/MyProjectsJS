const numeros = [1,2,3];

//Sin destructucacion
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno,dos,tres);


//Con destructuracion

let[one,two,three] = numeros;

console.log(one,two, three); //Hace lo mismo que arriba pero mas facil sin escribir tanto codigo



//En objetos

const persona = {
    nombre: "Jose",
    apellido: "Martinez",
    edad: 25
}


let{nombre,apellido,edad} = persona;

console.log(nombre,apellido,edad);
