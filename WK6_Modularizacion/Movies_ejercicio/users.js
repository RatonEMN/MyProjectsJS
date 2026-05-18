// crear usuario
// saludar usuario
// mostrar edad
// verificar si es adulto

export function crearUsuario(nombre, edad) {
  return {
    nombre,
    edad
  };
}

export function saludar(usuario){

    if(usuario.edad > 17){
    return `Hola ${usuario.nombre}, Bienvenido!
    Tu edad es ${usuario.edad} años`;
    }else{
        return `Lo siento no puedes pasar`
    }
}








