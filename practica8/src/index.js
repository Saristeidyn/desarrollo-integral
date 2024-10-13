"use strict";
console.log("hola codespace");
const nuevoHeroe = 'CHapulin colorado';
function returnName() {
    return nuevoHeroe;
}
const heroeNombre = returnName();
let otraVariable = returnName();
console.log('De que tipo es: ', typeof otraVariable);
//Parametros obligatorios en funciones
const nombreCompleto = (nombre, apellido) => {
    return `${nombre} ${apellido}`;
};
const tuNombre = nombreCompleto("Carlos", "Serano");
console.log(tuNombre);
//Parametros opcionales en funciones
const nombreCompleto2 = (nombre, apellido) => {
    return `${nombre} ${apellido || 'sin apellido'}`;
};
const tuNombre2 = nombreCompleto2("Carlos2");
console.log(tuNombre2);
const nombreCompleto3 = (nombre, apellido, mayusculas = false) => {
    if (mayusculas) {
        return `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`.toUpperCase();
    }
    return `${nombre || 'sin nombre'} ${apellido || 'sin apellido'}`;
};
const tuNombre3 = nombreCompleto3("saray", "martinez", true);
console.log(tuNombre3);
const nombreCompleto4 = (nombre, edad, mayusculas = false) => {
    return `${nombre || 'sin nombre'} ${edad || 'sin apellido'}`;
};
const tuNombre4 = nombreCompleto4("saray", 22, true);
console.log(tuNombre4);
