// 1. Crear plantilla HTML base ☑️
// 2. Crear estructura del formulario ☑️
// 3. Conectar archivo JS ☑️
// 4. Seleccionar elementos del DOM ☑️
//Ejemplo de como usar querySelector:
// document.querySelector("#nombre")   // id
// document.querySelector(".campo")    // clase
// document.querySelector("input")     // etiqueta
// 5. Capturar evento submit
// 6. Validar datos (nombre, correo, edad)
// 7. Mostrar errores en pantalla
// 8. Evitar envío si hay errores
// 9. Simular guardado de datos

const formulario = document.querySelector("#formulario");

const inputNombre = document.querySelector("#nombre");
const inputCorreo = document.querySelector("#correo");
const inputEdad = document.querySelector("#edad");

const errores = document.querySelector("#errores");

const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", validarDatos);

function validarDatos(event) {
    event.preventDefault();

    errores.innerHTML = "";

    let hayErrores = false;

    const nombre = inputNombre.value.trim();
    const correo = inputCorreo.value;
    const edad = Number(inputEdad.value);


    if (edad === "" || edad < 18 || edad > 100) {
        hayErrores = true;
        errores.innerHTML += "La edad debe ser mayor a 18 y menor que 100  <br>";
    }

    if (nombre === "") {
        hayErrores = true;
        errores.innerHTML += "El nombre es obligatorio <br>";
    }

    if (!correo.includes("@")) {
        hayErrores = true;
        errores.innerHTML += "El correo es obligatorio <br>";
    }

    if (hayErrores) {
        resultado.innerHTML = "";
        return;
    }

    mostrarDatos(nombre, edad, correo);

}


function mostrarDatos(nombre, edad, correo) {
    
    resultado.innerHTML = `El nombre es ${nombre}, la edad es ${edad} y el correo es ${correo}`;

}