console.log("hola codespace");
var nuevoHeroe = 'CHapulin colorado';
function returnName() {
    return nuevoHeroe;
}
var heroeNombre = returnName();
var otraVariable = returnName();
console.log('De que tipo es: ', typeof otraVariable);
//Parametros obligatorios en funciones
var nombreCompleto = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido);
};
var tuNombre = nombreCompleto("Carlos", "Serano");
console.log(tuNombre);
//Parametros opcionales en funciones
var nombreCompleto2 = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido || 'sin apellido');
};
var tuNombre2 = nombreCompleto2("Carlos2");
console.log(tuNombre2);
var nombreCompleto3 = function (nombre, apellido, mayusculas) {
    if (mayusculas === void 0) { mayusculas = false; }
    if (mayusculas) {
        return "".concat(nombre || 'sin nombre', " ").concat(apellido || 'sin apellido').toUpperCase();
    }
    return "".concat(nombre || 'sin nombre', " ").concat(apellido || 'sin apellido');
};
var tuNombre3 = nombreCompleto3("saray", "martinez", true);
console.log(tuNombre3);
var nombreCompleto4 = function (nombre, edad, mayusculas) {
    if (mayusculas === void 0) { mayusculas = false; }
    return "".concat(nombre || 'sin nombre', " ").concat(edad || 'sin apellido');
};
var tuNombre4 = nombreCompleto4("saray", 22, true);
console.log(tuNombre4);
