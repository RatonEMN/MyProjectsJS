//Crea una clase Auto y permite crear varias instancias

class auto {
    constructor(marca,modelo,year,color){
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
        this.color = color;
    }

obtenerInfo(){
    return(`El auto es un ${this.marca} modelo ${this.modelo} del año ${this.year} y de color ${this.color}`);
}
}

const auto_toyota = new auto("Toyota","Tacoma",2025,"negro");
const auto_honda = new auto("Honda","Civic",2007,"gris plata");
const auto_ford = new auto("Ford","Ranger",2002,"blanco");

console.log("------------");
console.log(auto_toyota.obtenerInfo());

console.log("------------");
console.log(auto_honda.obtenerInfo());

console.log("------------");
console.log(auto_ford.obtenerInfo());

console.log("------------");