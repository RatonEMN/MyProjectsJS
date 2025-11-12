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
        year: 2017,
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

//Este codigo se puede simplificar un un arrow function de la siguiente manera:
//const autos_recientes = autos.filter(auto => auto.year >= 2015);

console.log("---------Autos Recientes usando filter y forEach------------");

//Imprimo mis resultados con forEach()
autos_recientes.forEach(reciente => {
    
    console.table(`${reciente.marca} ${reciente.modelo} ${reciente.year} ${reciente.color}`);
});

//Existe el metodo console.table, que me permite mostrar los datos en formato tabla:
console.table(autos_recientes);
console.log("-------------------------------------");




//Tambien se pueden imprimir solo con forEach
//Imprimo los autos mas viejos con forEach()
    console.log(""); //Salto de linea   
    console.log("-----------Autos Viejos usando solo forEach----------------");

autos.forEach(autos_viejos => {
    if(autos_viejos.year < 2015){
        console.log(`${autos_viejos.marca} ${autos_viejos.modelo} ${autos_viejos.year} ${autos_viejos.color}`);
    }
});
    console.log("---------------------------------------");



//Usando un bucle for
//Imprimo los autos que sean igual a 2016
console.log("-----------Autos 2016 unando un bucle for----------------");
for(let i=0;i < autos.length; i++){ //Sintaxis de for(let i=0"Representa en donde inica i", i < objeto.length"Representa hasta cuando va a iterar",i++"Representa la cantidad en la cual va a estar iterando")
    //Se obtiene el numero de objeto(arreglo) en cada iteracion
    const auto = autos[i]; 
    if(auto.year === 2016){
        console.log(`${auto.marca} ${auto.modelo} ${auto.year} ${auto.color}`);
    } 
}
console.log("-------------------------------------");

//Usando for .... of 
//Imprimir lo autos que sean igual al 2017
console.log("-----------Autos > 2016 usando for...of ----------------");
for(const auto of autos){
    //Aplicmmos la condicion
    if(auto.year > 2016){
        console.log(`${auto.marca} ${auto.modelo} ${auto.year} ${auto.color}`);
    }
}
console.log("-------------------------------------");

// Existen varias formas de recorrer y filtrar arreglos de objetos:
// 1️⃣ filter() + forEach()
// 2️⃣ forEach() con condición
// 3️⃣ bucle for tradicional
// 4️⃣ bucle for...of
