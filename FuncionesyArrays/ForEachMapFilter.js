
const numeros = [3, 7, 2, 9, 4];
//Imprimir los numeros del arreglo usando forEach
console.log("-----------Imprimir numeros usando forEach----------------");

imprimirNumeros = numeros.forEach(numero => {
    console.log(`El numero es ${numero}`)    
});
console.log("---------------------------------------------------------");


const nombres = ["Ana", "Luis", "Pedro", "María"];
//Imprimir los numeros que tengan mas de 4 letras usando forEach
console.log("-----------Nombres con mas de 4 letras usando forEach----------------");

nombres4letras = nombres.forEach(nombre => {
    if(nombre.length >= 4){
        console.log(`${nombre}`)
    }
});
console.log("---------------------------------------------------------");



const edades = [12, 18, 25, 14, 30, 16];
//Usa filter para crear un nuevo arreglo con solo mayores de edad.
console.log("-----------Edades mayores de edad------------------------");

//Aqui voy a usar una funcion explicita con corchetes
mayoresEdad = edades.filter(edad => { 
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





const numeros2 = [1, 2, 3, 4];

//Usa map para crear un nuevo arreglo con los números al cuadrado.




const personas = [
  { nombre: "Juan", edad: 20 },
  { nombre: "Ana", edad: 17 },
  { nombre: "Carlos", edad: 30 }
];

//Usa map para obtener un arreglo con solo los nombres.




const autos = [
  { marca: "Toyota", year: 2018 },
  { marca: "Nissan", year: 2012 },
  { marca: "Ford", year: 2020 },
  { marca: "Chevrolet", year: 2010 }
];

//Obtén un nuevo arreglo con las marcas de los autos posteriores a 2015.
//(⚠️ pista: primero filter, luego map)


