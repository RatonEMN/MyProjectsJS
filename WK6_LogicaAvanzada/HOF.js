// 🧩 Parte 1: map

// Tienes este arreglo:

const productos = [
  { nombre: "Laptop", precio: 1000 },
  { nombre: "Mouse", precio: 50 },
  { nombre: "Teclado", precio: 100 }
];

// 👉 Crea un nuevo arreglo con solo los nombres


const nombres = productos.map(function(objeto){
    return objeto.nombre;
});

console.log(nombres);