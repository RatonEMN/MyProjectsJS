//Crea una lista de compras y agrega, elimina o busca productos.

//Muestro al usuario un menu y le pido que ingrese una opcion

const prompt = require("prompt-sync")();


function menu(){

const productos = ["manzana","pera"];

console.log("-----Lista de compras-----");
console.log("1. Agregar producto");
console.log("2. Eliminar producto");
console.log("3. Buscar producto");
console.log("4. Ver lista completa");
console.log("5. Salir...");

const opcion = prompt("Ingresa una opcion: ");
const noOpcion = parseInt(opcion);

  switch(noOpcion){
    case isNaN:
    console.log("**********Por favor, ingresa un opcion válida.**********");
    console.log("");
    menu();
    break;
    case 1:
    agregar_producto(productos);
    break;
    case 2:
    eliminar_producto(productos);
    break;
    case 3:
    console.log("Opcion 3");
    break;  
    case 4:
    ver_productos(productos);
    break;
    case 5:
    //Salir
    break;
    default:
    console.log("**********Por favor, ingresa un opcion válida.**********");
    console.log("");
    menu();
    break;
  }

}

function agregar_producto(productos){
console.log("");//Salto de linea
const producto_nuevo = prompt("Ingresa el nombre del nuevo producto: ");
if (producto_nuevo.length==0) {
  console.log("Por favor, ingresa un producto.");
  agregar_producto();
} else {
    productos.push(producto_nuevo);
    console.log("✅Producto agregado");
    console.log(""); //Salto de linea
    menu();
}
}

function eliminar_producto(productos){
console.log("");//Salto de linea
const producto_eliminar = prompt("Ingresa el nombre del producto: ");

// Vamos a buscar la palabra y obtener su índice
let indice = productos.indexOf(producto_eliminar); //El metodo indexOf recorre la cadena o arreglo, desde la pocision 0 y nos trae su posicion(indice)
//console.log(`Índice encontrado: ${indice}`); // Muestra el indice: ejemplo: 1

//Si el indice, no es igual a -1, entonces eliminamos el dato con el metodo splice en la posicion que indica el indice:
if (indice !== -1) {
    productos.splice(indice, 1); // (indice = posicion a eliminar , 1 = Cantidad de datos que queremos eliminar)
    console.log("✅Producto eliminado.");
    const opcion_menu = prompt("----Para regresar al menu, presione enter.----");
    console.log("");//Salto de linea
    menu();
}else{
    console.log("El producto que ingresaste no existe, intentalo nuevamente");
    eliminar_producto();
}

}

function ver_productos(productos){
    console.log("");//Salto de linea
    console.log("🔹Tus productos son los siguientes:");
    for(let i = 0; i <= productos.length-1; i++){
        console.log(`${i+1}.-${productos[i]}`);
    }
    const opcion_menu = prompt("----Para regresar al menu, presione enter.----");
    console.log("");//Salto de linea
    menu();
}

menu();