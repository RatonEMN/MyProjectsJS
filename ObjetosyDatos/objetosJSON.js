//Convierte el objeto a JSON y viceversa.


//Los archivos JSON se refieren al formato, el cual es importante para poder mandar la informacion a servidores, cosas importantes a considerar:
//No se pueden convertir funciones a JSON, tampoco valores undefined o valores tipo Symbol.


//Creo mi objeto llamado tareaPendiente:
const tareaPendiente = {
  // String (La descripción de la tarea)
  descripcion: "Enviar reporte trimestral de ventas", 
  
  // Booleano (Estado de la tarea)
  completada: false,    
  
  // Número (ID de la tarea)
  id: 42,      
  
  // Array (Personas responsables)
  responsables: ["Ana", "Pedro"], 
  
  // Undefined (Un valor que no debe aparecer en el resultado JSON)
  prioridad: undefined, 
  
  // Función (Una función que NO debe aparecer en el resultado JSON)
  mostrarEstado: function() {
    console.log(`Estado: ${this.completada ? 'Terminada' : 'Pendiente'}`);
  } 
};

//Objeto original, antes de convertir a JSON:
console.log("Objeto original:");
console.log(tareaPendiente);
console.log("-------------------------------------------------");

//Convierto mi objeto a JSON:
console.log("Objeto en formato JSON:");
const tareaPendienteJSON = JSON.stringify(tareaPendiente);

//Se pueden pasar parametros adicionales al momento de serializar mi obejto los cuales son replacer y spacer,
//replacer: Me ayuda a filtrar datos, modificarlos
//spacer: Me ayuda a identar los datos para que sean mas legibles

//const tareaPendienteJSON = JSON.stringify(tareaPendiente,null,2); 

console.log(tareaPendienteJSON);


console.log("-------------------------------------------------");


console.log("Objeto en formato convertido de JSON -> JS:");
const tareaPendienteJS = JSON.parse(tareaPendienteJSON);
console.log(tareaPendienteJS);

console.log("Propiedades después de convertir de JSON -> JS:");
console.log(Object.keys(tareaPendienteJS));
