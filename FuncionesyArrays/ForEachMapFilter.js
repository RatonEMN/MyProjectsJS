const numeros = [3, 7, 2, 9, 4];
//Imprimir los numeros del arreglo usando forEach
console.log("-----------Imprimir numeros usando forEach----------------");

numeros.forEach(numero => {
    console.log(`El numero es ${numero}`)    
});
console.log("---------------------------------------------------------");


const nombres = ["Ana", "Luis", "Pedro", "María"];
//Imprimir los numeros que tengan mas de 4 letras usando forEach
console.log("-----------Nombres con mas de 4 letras usando forEach----------------");

nombres.forEach(nombre => {
    if(nombre.length >= 4){
        console.log(`${nombre}`)
    }
});
console.log("---------------------------------------------------------");



const edades = [12, 18, 25, 14, 30, 16];
//Usa filter para crear un nuevo arreglo con solo mayores de edad.
console.log("-----------Edades mayores de edad------------------------");
//Aqui voy a usar una funcion explicita con corchetes
const mayoresEdad = edades.filter(edad => { 
    return edad > 17 
});
console.log(mayoresEdad);
console.log("---------------------------------------------------------");



const productos = [
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Mouse", precio: 300 },
    { nombre: "Monitor", precio: 4000 }
];
//Usa filter para obtener solo los productos que cuesten más de 1000.

console.log("-----------Productos que cuestan mas de 1000--------------");
//Aqui voy a usar una funcion implicita sin corchetes
const productosCaros = productos.filter(producto => producto.precio > 1000 );
console.log(productosCaros);
console.log("---------------------------------------------------------");



const numeros2 = [1, 2, 3, 4];
//Usa map para crear un nuevo arreglo con los números al cuadrado.
//La funcion map me crea un nuevo arreglo de acuerdo con mi funcion
console.log("--------Nuevo arreglo con numeros al cuadrado------------");
//Aqui voy a usar una funcion explicita con corchetes
const numbers2 = numeros2.map(numero =>{
    return numero * numero;
});
console.log(numbers2);
console.log("---------------------------------------------------------");



const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 17 },
    { nombre: "Carlos", edad: 30 }
];
//Usa map para obtener un arreglo con solo los nombres.
console.log("---------------Arreglo con solo nombres-------------------");
//Aqui voy a usar una funcion implicita sin corchetes
const nombresPersonas = personas.map(nombre =>  nombre.nombre );
console.log(nombresPersonas);
console.log("---------------------------------------------------------");




const autos = [
    { marca: "Toyota", year: 2018 },
    { marca: "Nissan", year: 2012 },
    { marca: "Ford", year: 2020 },
    { marca: "Chevrolet", year: 2010 }
];
//Obtén un nuevo arreglo con las marcas de los autos posteriores a 2015.
//(⚠️ pista: primero filter, luego map)
console.log("-------------Marcas posteriores a 2015-------------------");
//Aqui voy a usar una funcion explicita con corchetes
const filtroMarcas = autos.filter(auto =>  auto.year > 2015 );
const marcasActuales = filtroMarcas.map(auto =>  auto.marca );
console.log(marcasActuales);
console.log("---------------------------------------------------------");


