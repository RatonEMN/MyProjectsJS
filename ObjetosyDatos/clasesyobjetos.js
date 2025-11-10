//Crea una clase Auto y permite crear varias instancias

//Creo mi clase(plantilla) con el constructor, esta es mi sintaxis: 
class Auto {
    constructor(marca,modelo,year,color){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }

obtenerInfo(){ //Dentro de mi clase creo una funcion, la cual usare mas tarde para imprimir los datos
    return(`El auto es un ${this.marca} modelo ${this.modelo} del año ${this.year} y de color ${this.color}`);
}
}

//Creo mis objetos, en la cual mando mis argumentos(propiedades) a la clase auto
const auto_toyota = new Auto("Toyota","Tacoma",2025,"negro");
const auto_honda = new Auto("Honda","Civic",2007,"gris plata");
const auto_ford = new Auto("Ford","Ranger",2002,"blanco");


//Aqui mando a imprimir los datos de mis objetos invocando la funcion que tengo en mi clase auto
console.log("------------");
console.log(auto_toyota.obtenerInfo());

console.log("------------");
console.log(auto_honda.obtenerInfo());

console.log("------------");
console.log(auto_ford.obtenerInfo());

console.log("------------");