//Calcule el total a pagar con IVA de una compra.

console.log("Mi programa de compras");
//Calcule el total a pagar con IVA de una compra.

const impuesto_IVA = 0.16;

const prompt = require("prompt-sync")();

const compra = prompt("Ingresa el total de la compra: ");
        
// Convierte la entrada a número decimal.
const numberCompra = parseFloat(compra);
let total_compra = numberCompra + (numberCompra*impuesto_IVA);  

console.log("El total de tu compra es: "+total_compra);
