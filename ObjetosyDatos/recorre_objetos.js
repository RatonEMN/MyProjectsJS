//Crea una función que recorra un arreglo de objetos y muestre solo los autos más recientes.

const autos = [
    {
        marca: "Toyota",
        modelo: "Tacoma",
        year: 2016,
        color: "gris"
    },
    {
        marca: "Honda",
        modelo: "Civic",
        year: 2010,
        color: "rojo"
    },
    {
        marca: "Nissan",
        modelo: "Versa",
        year: 2016,
        color: "azul"
    },
    {
        marca: "Ford",
        modelo: "Ranger",
        year: 2012,
        color: "morado"
    }
];


//La primera opcion es imprimir los autos mas recientes(a partir de 2015) con los metodos filter() y forEach()

//Creo un nuevo arreglo con filter()
const autos_recientes = autos.filter(reciente =>{
    return reciente.year >= 2015;
});

console.log("---------Autos Recientes------------");

//Imprimo mis resultados con forEach()
autos_recientes.forEach(reciente => {
    
    console.log(`${reciente.marca} ${reciente.modelo} ${reciente.year} ${reciente.color}`);
});
console.log("-------------------------------------");




//Tambien se pueden imprimir solo con forEach
//Imprimo los autos mas viejos con forEach()
    console.log(""); //Salto de linea   
    console.log("-----------Autos Viejos----------------");

autos.forEach(autos_viejos => {
    if(autos_viejos.year < 2015){
        console.log(`${autos_viejos.marca} ${autos_viejos.modelo} ${autos_viejos.year} ${autos_viejos.color}`);
    }
});
    console.log("---------------------------------------");



//Usando un bucle for
//Imprimo los autos que sean igual a 2016
console.log("-----------Autos 2016----------------");
for(let i=0;i < autos.length; i++){ //Sintaxis de for(let i=0"Representa en donde inica i", i < objeto.length"Representa hasta cuando va a iterar",i++"Representa la cantidad en la cual va a estar iterando")
    //Se obtiene el numero de objeto(arreglo) en cada iteracion
    const auto = autos[i]; 
    if(auto.year === 2016){
        console.log(`${auto.marca} ${auto.modelo} ${auto.year} ${auto.color}`);
    } 
}
console.log("-------------------------------------");
//existen 2 formas de recorrer mi arreglo con filter y con foreach, tambien se pude hacer con un bucle for u of