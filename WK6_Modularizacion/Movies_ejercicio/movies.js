export function crearPeLicula(nombre, informacion) {
  return {
    nombre,
    informacion,
    disponible : true
  };
}

export function mostrarInformacion(pelicula) {
    if(pelicula.disponible){
  return `La pelicula ${pelicula.nombre} se encuentra disponible se trata de: ${pelicula.informacion}`;
    }else{
    return `La pelicula no se encuentra disponible`;
    }
}