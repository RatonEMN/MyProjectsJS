export function crearProducto(nombre, precio) {
  return {
    nombre,
    precio
  };
}

export function mostrarPrecio(producto) {
  return `El precio es ${producto.precio}`;
}