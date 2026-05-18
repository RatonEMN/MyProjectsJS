// 🏠 1. FUNCIÓN DECLARADA (La clásica)
// Se puede llamar incluso antes de ser definida (hoisting).
function saludarNormal(nombre) {
    return `¡Hola, ${nombre}! 👋`;
}

// 🏹 2. ARROW FUNCTION CON LLAVES (Brackets)
// Se usa cuando la función tiene más de una línea de código.
// Requiere la palabra clave 'return' explícitamente.
const saludarConLlaves = (nombre) => {
    const mensaje = `¡Hola, ${nombre} desde las llaves! 📝`;
    return mensaje;
};

// ⚡ 3. ARROW FUNCTION SIN LLAVES (Retorno implícito)
// ¡Ideal para funciones de una sola línea! 
// No necesita 'return', lo hace automáticamente.
const saludarSencillo = (nombre) => `¡Hola, ${nombre} en una línea! 🚀`;

// 🎈 4. ARROW FUNCTION SIN PARÁMETROS
// Cuando la función no recibe datos, usamos paréntesis vacíos ().
const despedirse = () => "¡Adiós, nos vemos pronto! 💨";




// --- EJEMPLOS DE USO EN CONSOLA ---
console.log(saludarNormal("Gaby"));
console.log(saludarConLlaves("Alex"));
console.log(saludarSencillo("Mundo"));
console.log(despedirse());