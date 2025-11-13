//Convierte el objeto a JSON y viceversa.

const carro = {
    marca: "honda",
    modelo: "civic",
    year: 2007,
    color: "gris plata"
};


//Convertir mi objeto carro de JS a objeto JSON:
const objJSON = JSON.stringify(carro);
console.log(objJSON);

//Viceversa; Convertir mi objeto JSON a objeto JS:
const objJS = JSON.parse(objJSON);
console.log(objJS.marca);


//ME QUEDE EN REVISAR LAS CARACTERISTICAS PARA LA CONVERSION DE OBJETO A JSON, y hacer un nuevo ejercicio



